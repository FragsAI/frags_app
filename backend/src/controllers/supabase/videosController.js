import supabase from '../../config/supabase.js';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });

export const uploadVideo = [
  upload.single("file"),
  async (request, response) => {
    try {
      console.log("=== Received Upload Request ===");

      console.log("Request Body:", request.body);
      console.log("Uploaded File Details:", request.file || "No file uploaded");

      const userId = request.body.userId;
      const videoFile = request.file;

      if (!userId) {
        console.error("Clerk User ID is missing in the request body");
        return response
          .status(400)
          .json({ error: "Clerk user ID is required (userId)." });
      }

      if (!videoFile) {
        console.error("Video file is missing in the request");
        return response.status(400).json({ error: "No video file provided." });
      }

      const storagePath = `${userId}/${videoFile.originalname}`;
      console.log("Generated Storage Path:", storagePath);

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("video_storage")
        .upload(storagePath, videoFile.buffer, {
          cacheControl: "3600",
          upsert: true,
          contentType: videoFile.mimetype,
        });

      if (uploadError) {
        console.error("Supabase Upload Error:", uploadError);
        return response
          .status(500)
          .json({ error: "Failed to upload video to storage." });
      }
      console.log("Video uploaded to storage:", uploadData);

      const videoUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/video_storage/${storagePath}`;
      console.log("Generated Video URL:", videoUrl);

      const { error: dbError } = await supabase
        .from("videos")
        .insert([
          {
            clerk_user_id: userId,
            url: videoUrl,
          },
        ]);

      if (dbError) {
        console.error("Database Insert Error:", dbError.message);
        return response
          .status(500)
          .json({ error: "Failed to save video metadata." });
      }

      console.log("Video metadata inserted successfully");
      response.status(200).json({
        message: "Video uploaded successfully!",
        url: videoUrl,
      });
    } catch (error) {
      console.error("Unexpected Error in uploadVideo:", error.message);
      response
        .status(500)
        .json({ error: "Internal server error while uploading video." });
    }
  },
];

  export const getUserVideos = async (request, response) => {
    try {
      console.log("=== Received Request to Fetch User Videos ===");
  
      const userId = request.query.userId;
      console.log("User ID:", userId);
  
      if (!userId) {
        console.error("User ID is missing in the query parameters");
        return response
          .status(400)
          .json({ error: "Missing userId query parameter." });
      }
  
      const { data: videos, error } = await supabase
        .from("videos")
        .select("*")
        .eq("clerk_user_id", userId)
        .order("created_at", { ascending: false });
  
      if (error) {
        console.error("Error Fetching Videos:", error.message);
        return response.status(500).json({ error: "Failed to fetch videos." });
      }
  
      if (videos.length === 0) {
        console.warn("No videos found for user:", userId);
      } else {
        console.log("Fetched Videos:", videos);
      }
  
      response.status(200).json({ videos });
    } catch (error) {
      console.error("Unexpected Error in getUserVideos:", error.message);
      response
        .status(500)
        .json({ error: "Server error while fetching videos." });
    }
  };
  