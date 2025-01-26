import express from 'express';
import CreateUser from '../UserManagement/userCreation';

const userManagementRouter = express.Router();

userManagementRouter.post('/create', (req, res) => {
    const response = CreateUser(req);

    if (response) {
        res.status(200).json(response);
    }
    else {
        res.status(500).json({ error: "An error occurred" });
    }
});

export default userManagementRouter