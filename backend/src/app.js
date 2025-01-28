import express from 'express';
import cors from 'cors';
import * as middleware from './utils/middleware';
import subscriptionRouter from './controllers/stripe/subscription';
import userManagementRouter from './controllers/user/userManagement';
import { clerkMiddleware } from '@clerk/express';

// Import video controllers
import { uploadVideo, getUserVideos } from './controllers/supabase/videosController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(clerkMiddleware());

// Register your existing routers
app.use('/api/user', userManagementRouter);
app.use('/api/subscription', subscriptionRouter);

// Add routes for video uploads and fetching videos
app.post('/api/uploadVideos', uploadVideo); // Handles video uploads
app.get('/api/getVideos', getUserVideos);   // Handles fetching user videos

// Default route
app.get('/', async (req, res) => {
    res.send('Hello World');
});

// Handle unknown endpoints
app.use(middleware.unknownEndpoint);

export default app;
