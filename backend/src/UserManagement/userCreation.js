import { clerkClient } from "@clerk/express";
import supabase from "../config/supabase";
import logger from "../utils/logger";



async function getCurrentUser(body) {
    try {
        const user = await clerkClient.users.getUser(body.user_id);
        return user;
    } catch (error) {
        logger.error('Error getting user:', error);
        return null;
    }
}

async function insertUser(id = "", email = "") {
    console.log("Inserting user", id, email);
    try {
        const response = await supabase.from("users").insert([
            {
                clerk_user_id: id,
                email: email,
            },
        ]);

        if (response.error) {
            console.error("Error creating user:", response.error);
            return null;
        }

        console.log("User created successfully:", response.data);
        return { data: response.data };
    } catch (error) {
        console.error("Unexpected error:", error);
        return null;
    }
}


async function CreateUser(req) {
    try {
        const user = await getCurrentUser(req.body);
        if (!user) {
            return null;
        }
        const id  = user.id;
        const email = user.primaryEmailAddress.emailAddress;
        const { data } = await insertUser(id, email);
        return data;
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
}

async function updateUserData(req) {
    try {

        const user = await getCurrentUser(req.body);
        const {id} = user;
        const {firstName, lastName, emailAddresses } = req.body;
        const { data, error } = await clerkClient.users.updateUser(id, {
            firstName: firstName || user.firstName,
            lastName: lastName || user.lastName,
            emailAddresses: emailAddresses || user.emailAddresses,
        });
        if (error) {
            console.error("Error updating user:", error);
            return null;
        }
        return { data };
    }
    catch (error) {
        console.error('Error updating user:', error);
        return null;
    }
}

async function GetUserData(userId) {
    try {
        const user = await clerkClient.users.getUser(userId);
        if (!user) {
            return null;
        }
        return user;
    } catch (error) {
        console.error('Error getting user:', error);
        return null;
    }
}


export {CreateUser, updateUserData, GetUserData};
