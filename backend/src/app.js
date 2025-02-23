import express from 'express';
import cors from 'cors';
import * as middleware from './utils/middleware';
import subscriptionRouter from './controllers/stripe/subscription';
import userManagementRouter from './controllers/user/userManagement';
import { clerkMiddleware } from '@clerk/express';
import videoRouter from './controllers/video/videosController';

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(clerkMiddleware());

app.use('/api/user', userManagementRouter);
app.use('/api/subscription', subscriptionRouter);
app.use('/api/video', videoRouter)

// Handle unknown endpoints
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler)

export default app;
