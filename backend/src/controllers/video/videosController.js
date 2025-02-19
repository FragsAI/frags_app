import express from 'express';
import multer from 'multer';
import { clerkClient, requireAuth } from '@clerk/express';
import { uploadVideo, getVideo, deleteVideo, getAllVideos } from './videoHelper.js';
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
    const videos = await getAllVideos(user);
    response.status(200).json({ videos });
  } catch (error) {
    logger.error("Error fetching videos:", error.message);
    response.status(500).json({ error: error.message });
  }
});

videoRouter.get("/:name", async (request, response) => {
  try {
    const user = await clerkClient.users.getUser(request.auth.userId);
    const video = await getVideo(user, request.params.name);
    if (!video) {
      return response.status(404).json({ error: "Video not found" });
    }
    response.status(200).json({ video });
  } catch (error) {
    logger.error("Error fetching video:", error.message);
    response.status(500).json({ error: error.message });
  }
});

videoRouter.delete("/:name", async (request, response) => {
  try {
    const user = await clerkClient.users.getUser(request.auth.userId);
    await deleteVideo(user, request.params.name);
    logger.info("Video deleted:", video.Key);
    response.status(200).json({ message: "Video deleted successfully" });
  } catch (error) {
    logger.error("Error deleting video:", error.message);
    response.status(500).json({ error: error.message });
  }
});

export default videoRouter;
