import express from 'express';
import multer from 'multer';
import { clerkClient, requireAuth } from '@clerk/express';
import { uploadVideoToSupabase, fetchUserVideos } from './videoHelper.js';
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

export default videoRouter;
