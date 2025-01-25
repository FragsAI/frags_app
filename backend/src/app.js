import express from 'express';
import cors from 'cors';
import * as middleware from './utils/middleware.js';
import { clerkClient} from '@clerk/clerk-sdk-node';

const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

const verifyToken = async (token) => {
    
    try {
        console.log("clerk client", await clerkClient.users.getCount())
        // console.log("clerk client", await clerkClient.users.getUserBySessionToken(token))
        console.log("clerk duration", clerkClient.sessions.getTokenDuration(token))
        const session = await clerkClient.sessions.verifySession(token);
        console.log("cler session", session)
        return session;
    } catch (error) {
        throw new Error('Invalid or expired token');
    }
};
  
const authMiddleware = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token required' });
    }
    try {
        const session = await verifyToken(token);
        req.session = session;
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};


app.get('/', authMiddleware, (req, res) => {
    res.send('Hello World');
});

export default app;
