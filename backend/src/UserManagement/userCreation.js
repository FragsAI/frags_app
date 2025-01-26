import { clerkClient } from "@clerk/express";
import { supabase } from "../config/supabase";
import logger from "../utils/logger";
import jwt from 'jsonwebtoken';

async function verifySessionToken(sessionToken) {
  try {
    const publicKey = process.env.CLERK_JWT_PUBLIC_KEY;

    const decoded = jwt.verify(sessionToken, publicKey);
    console.log('Verified and decoded session token:', decoded);

    console.log('User ID:', decoded.userId);
  } catch (error) {
    console.error('Error verifying session token:', error);
  }
}
async function getCurrentUser(sessionToken) {
    try {
        console.log('Session token:', sessionToken);
        const user = null;
        // verifySessionToken(sessionToken);
        // console.log('Received session token:', sessionToken);

        // if (!sessionToken) {
        //     throw new Error('No session token provided');
        // }

        // const session = await clerkClient.sessions.getSession(sessionToken);
        // console.log('Session:', session);  // Log session data for debugging

        // if (!session) {
        //     throw new Error('Session not found');
        // }

        // const user = await clerkClient.users.getUser(session.userId);
        // console.log('User:', user);  // Log user data for debugging
        return user;
    } catch (error) {
        console.error('Error getting current user:', error);
        return null;  // Gracefully handle the error by returning null
    }
}
  
  

async function CreateUser(req) {
    try {
        const sessionToken = req.headers.authorization?.split(" ")[1];
        const user = await getCurrentUser(sessionToken);
        console.log('User:', user);
    } catch (error) {
        console.error('Error creating user:', error);
        return null;
    }
}

export default CreateUser;
