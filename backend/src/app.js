import express from 'express';
import cors from 'cors';
import * as middleware from './utils/middleware';
import subscriptionRouter from './controllers/stripe/subscription';

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/subscription', subscriptionRouter);

app.use(middleware.unknownEndpoint);

export default app;
