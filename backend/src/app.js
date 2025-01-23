import express from 'express';
import cors from 'cors';
import middleware from './utils/middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use(middleware.unknownEndpoint);

export default app;
