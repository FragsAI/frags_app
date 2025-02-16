import express from 'express';
import multer from 'multer';
import { clerkClient, requireAuth } from '@clerk/express';
import { uploadVideo, fetchVideos } from './videoHelper.js';
import logger from '../../utils/logger.js';

const videoRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

videoRouter.use(requireAuth());

videoRouter.post('/', upload.single('file'), async (request, response) => {
  try {
    const user = await clerkClient.users.getUser(request.auth.userId);
    const videoUrl = await uploadVideo(user, request.file);
    logger.info("Video uploaded:", videoUrl);
    return response.status(200).json({ message: `Uploaded video to ${videoUrl}` });
  } catch (error) {
    logger.error("Error in video upload:", error.message);
    response.status(500).json({ error: error.message });
  }
});

videoRouter.get("/", async (request, response) => {
  try {
    const user = await clerkClient.users.getUser(request.auth.userId);
    const videos = await fetchVideos(user);
    response.status(200).json({ videos });
  } catch (error) {
    logger.error("Error fetching videos:", error.message);
    response.status(500).json({ error: error.message });
  }
});

// Optimize this later, right now it fetches all videos and then filters. Make it so that it only gets one video using the S3 API

videoRouter.get("/:name", async (request, response) => {
  try {
    const user = await clerkClient.users.getUser(request.auth.userId);
    const videos = await fetchVideos(user);
    const video = videos.find(video => video.Key === `${user.id}/uploads/${request.params.name}`);
    if (!video) {
      return response.status(404).json({ error: "Video not found" });
    }
    response.status(200).json({ video });
  } catch (error) {
    logger.error("Error fetching video:", error.message);
    response.status(500).json({ error: error.message });
  }
})

// Create a delete route for videos with the same structure as the get and post routes

export default videoRouter;
