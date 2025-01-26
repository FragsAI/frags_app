import express from 'express';
import cors from 'cors';
import * as middleware from './utils/middleware';
import subscriptionRouter from './controllers/stripe/subscription';
import userManagementRouter from './routes/userRoutes';
const app = express();

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/user', userManagementRouter);
app.use('/api/subscription', subscriptionRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(middleware.unknownEndpoint);

export default app;
