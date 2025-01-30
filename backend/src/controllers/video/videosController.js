import supabase from '../../config/supabase.js';
import logger from '../../utils/logger.js';
import { clerkClient, requireAuth } from '@clerk/express';
import * as config from '../../utils/config'
import multer from 'multer';
import express from 'express'

const videoRouter = express.Router()
const upload = multer({ storage: multer.memoryStorage() });

videoRouter.use(requireAuth())

videoRouter.post('/', upload.single('file'), async (request, response) => {
  try {
    const user = await clerkClient.users.getUser(request.auth.userId);
    const videoFile = request.file;

    if (!videoFile) {
      logger.error("Video file is missing in the request");
      return response.status(400).json({ error: "No video file provided." });
    }

    const storagePath = `${user.id}/${videoFile.originalname.replace(/\s+/g, '_')}`;
    logger.info("Generated Storage Path:", storagePath);

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("video_storage")
      .upload(storagePath, videoFile.buffer, {
        cacheControl: "3600",
        upsert: true,
        contentType: videoFile.mimetype,
      });

    if (uploadError) {
      logger.error("Supabase Upload Error:", uploadError.message);
      return response.status(500).json({ error: "Failed to upload video to storage." });
    }
    logger.info("Video uploaded to storage:", uploadData);

    const videoUrl = `${config.DB_URI}/storage/v1/object/public/video_storage/${storagePath}`;
    logger.info("Generated Video URL:", videoUrl);

    const { error: dbError } = await supabase
      .from("videos")
      .insert([
        {
          clerk_user_id: user.id,
          url: videoUrl,
        },
      ]);

    if (dbError) {
      logger.error("Database Insert Error:", dbError.message);
      return response.status(500).json({ error: "Failed to save video metadata." });
    }

    response.status(200).json({message: "Video uploaded successfully!", url: videoUrl});
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
})

videoRouter.get("/", async(request, response) => {
  try {
    const user = await clerkClient.users.getUser(request.auth.userId)

    const { data: videos, error } = await supabase
      .from("videos")
      .select("*")
      .eq("clerk_user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      logger.error("Error Fetching Videos:", error.message);
      return response.status(500).json({ error: "Failed to fetch videos." });
    }

    if (videos.length === 0) {
      console.warn("No videos found for user:", user.id);
    } else {
      logger.info("Fetched Videos:", videos);
    }

    response.status(200).json({ videos });
  } catch (error) {
    logger.error("Unexpected Error in getUserVideos:", error.message);
    response.status(500).json({ error: "Server error while fetching videos." });
  }
})

export default videoRouter