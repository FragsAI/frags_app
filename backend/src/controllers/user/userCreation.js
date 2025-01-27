import { clerkClient } from "@clerk/express";
import supabase from "../../config/supabase";
import logger from "../../utils/logger";

async function getCurrentUser(auth) {
    try {
        const user = await clerkClient.users.getUser(auth.userId);
        return user;
    } catch (error) {
        logger.error("Invalid Clerk Session or User already exists")
        return
    }
}

async function insertUser(id, email) {
    logger.info("Inserting user", id, email);
    try {
        const response = await supabase.from("users").insert([
            {
                clerk_user_id: id,
                email: email,
            },
        ]);
        if (response.error) { 
            logger.error(response.error.message)
            return
        }
        logger.info("User created successfully:", response.data);
        return { data: response.data };
    } catch (error) {
        logger.error("Invalid user data")
        return
    }
}


async function CreateUser(req) {
    try {
        const user = await getCurrentUser(req.auth);
        if (!user) {
            return;
        }
        const id  = user.id;
        const email = user.primaryEmailAddress.emailAddress;
        const data = await insertUser(id, email);
        return data;
    } catch (error) {
        logger.error("Invalid Session")
    }
}

async function updateUserData(req) {
    try {
        const user = await getCurrentUser(req.auth);
        const id = user.userId;
        const {firstName, lastName, emailAddresses } = req.body;
        const { data, error } = await clerkClient.users.updateUser(id, {
            firstName: firstName || user.firstName,
            lastName: lastName || user.lastName,
            emailAddresses: emailAddresses || user.emailAddresses,
        });
        if (error) {
           logger.error(error)
           return
        }
        return { data };
    }
    catch (error) {
        logger.error("Failed to Update User")
    }
}

async function GetUserData(userId) {
    try {
        const user = await clerkClient.users.getUser(userId);
        if (!user) {
            return;
        }
        return user;
    } catch (error) {
        logger.error("Failed to fetch data")
    }
}


export {CreateUser, updateUserData, GetUserData};
