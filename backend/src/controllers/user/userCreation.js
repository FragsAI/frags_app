import { clerkClient } from "@clerk/express";
import createSupabase from "../../config/supabase";
import logger from "../../utils/logger";
import prisma from "../../config/prisma";
async function getCurrentUser(auth) {
    try {
        const user = await clerkClient.users.getUser(auth.userId);
        logger.info(user);
        return user;
    } catch (error) {
        logger.error("Invalid Clerk Session");
        return;
    }
}

async function insertUser(sessionId, id, email, fullName) {
    logger.info("Inserting user", id, email, fullName);
    try {
        const user = await prisma.user.create({
            data: {
                clerk_user_id: id,
                email: email,
                full_name: fullName,
            },
        });
        logger.info("User created successfully:", user);
        return { data: user };
    } catch (error) {
        logger.error("Invalid user data:", error);
        return;
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
        const fullName = `${user.firstName} ${user.lastName}`;
        const data = await insertUser(req.auth.sessionId, id, email, fullName);
        return data;
    } catch (error) {
        logger.error("Invalid Session:", error);
    }
}

async function updateUserData(req) {
    try {
        const user = await getCurrentUser(req.auth);
        const id = user.id;
        const { firstName, lastName, emailAddresses } = req.body;
        const { data } = await clerkClient.users.updateUser(id, {
            firstName: firstName || user.firstName,
            lastName: lastName || user.lastName,
            emailAddresses: emailAddresses || user.emailAddresses,
        });

        const updatedUser = await prisma.user.update({
            where: { clerk_user_id: user.id },
            data: {
                full_name: `${firstName} ${lastName}`,
            },
        });

        return { data };
    } catch (error) {
        logger.error(error.message);
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
        logger.error("Failed to fetch data:", error);
    }
}

async function deleteUser(req) {
    try {
        const user = await getCurrentUser(req.auth);
        const { data, error } = await clerkClient.users.deleteUser(user.id);
        if (error) {
            logger.error(error);
            return;
        }
        
        const deletedUser = await prisma.user.delete({
            where: { clerk_user_id: user.id },
        });

        return { data };
    } catch (error) {
        logger.error("Failed to delete user:", error);
    }
}

export { CreateUser, updateUserData, GetUserData, deleteUser };
