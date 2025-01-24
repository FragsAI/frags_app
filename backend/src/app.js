import express from 'express';
import cors from 'cors';
import * as middleware from './utils/middleware.js';
import {verifyToken} from '@clerk/clerk-sdk-node'
import { ClerkAPIKey } from './utils/config.js';
// import { Clerk } from '@clerk/clerk-sdk-node';
const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use(middleware.unknownEndpoint);

app.get('/', async (req, res) => {
    res.send('Hello World');
});

export default app;
