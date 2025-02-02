import express from 'express';
import {CreateUser, updateUserData, GetUserData} from './userCreation';
import { requireAuth } from "@clerk/express";

const userManagementRouter = express.Router();

userManagementRouter.get('/test', (req, res) => {
    res.send("Hello from user management");
});

userManagementRouter.post('/create', (req, res) => {
    const response = CreateUser(req);

    if (response) {
        res.status(200).json(response);
    } else {
        res.status(500).json({ error: "An error occurred" });
    }
});

userManagementRouter.use(requireAuth())

userManagementRouter.post('/update', (req, res) => {
    
    const response = updateUserData(req);

    if (response) {
        res.status(200).json(response);
    } else {
        res.status(500).json({ error: "An error occurred" });
    }
});


userManagementRouter.get('/', async (req, res) => {
    const response = await GetUserData(req.auth.userId);

    if (response) {
        res.status(200).json(response);
    } else {
        res.status(500).json({ error: "An error occurred" });
    }
});

// delete user from database

userManagementRouter.delete('/', (req, res) => {
    const response = deleteUser(req);
    
    if (response) {
        res.status(200).json(response);
    }
    else {
        res.status(500).json({ error: "An error occurred" });
    }
});
export default userManagementRouter