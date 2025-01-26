import express from 'express';
import {CreateUser, updateUserData, GetUserData} from '../UserManagement/userCreation';

const userManagementRouter = express.Router();


userManagementRouter.post('/create', (req, res) => {
    const response = CreateUser(req);

    if (response) {
        res.status(200).json(response);
    } else {
        res.status(500).json({ error: "An error occurred" });
    }
});

userManagementRouter.post('/update', (req, res) => {
    const response = updateUserData(req);

    if (response) {
        res.status(200).json(response);
    } else {
        res.status(500).json({ error: "An error occurred" });
    }
});


userManagementRouter.get('/user', (req, res) => {
    const response = GetUserData(req.query.userId);

    if (response) {
        res.status(200).json(response);
    } else {
        res.status(500).json({ error: "An error occurred" });
    }
});



userManagementRouter.get('/test', (req, res) => {
    res.send("Hello from user management");
});


export default userManagementRouter