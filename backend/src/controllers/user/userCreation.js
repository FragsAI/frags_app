import { clerkClient } from "@clerk/express";
import createSupabase from "../../config/supabase";
import logger from "../../utils/logger";

async function getCurrentUser(auth) {
    try {
        const supabase = await createSupabase(auth.sessionID)
        const user = await clerkClient.users.getUser(auth.userId);
        const supabaseAuth = await supabase.auth.getUser()
        logger.info(supabaseAuth)
        return user;
    } catch (error) {
        logger.error("Invalid Clerk Session")
        return
    }
}

async function insertUser(sessionId, id, email) {
    logger.info("Inserting user", id, email);
    try {
        const supabase = await createSupabase(sessionId)
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
        const id = user.id;
        const email = user.primaryEmailAddress.emailAddress;
        const data = await insertUser(req.auth.sessionId, id, email);
        return data;
    } catch (error) {
        logger.error("Invalid Session")
    }
}

async function updateUserData(req) {
    try {
        const user = await getCurrentUser(req.auth);
        const id = user.id;
        const {firstName, lastName, emailAddresses } = req.body;
        const { data } = await clerkClient.users.updateUser(id, {
            firstName: firstName || user.firstName,
            lastName: lastName || user.lastName,
            emailAddresses: emailAddresses || user.emailAddresses,
        });
        const supabase = await createSupabase(req.auth.sessionID)
        const { error } = await supabase.from("users").update({
            full_name: `${firstName} ${lastName}`
        }).eq("clerk_user_id", user.id)
        return { data };
    }
    catch (error) {
        logger.error(error.message)
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
