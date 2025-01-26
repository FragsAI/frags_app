import { clerkClient } from "@clerk/express";
import { supabase } from "../config/supabase";

async function getCurrentUser(sessionToken) {
    try {
        const session = await clerkClient.sessions.getSession(sessionToken);
        const user = await clerkClient.users.getUser(session.userId);
        return user;
    }
    catch (error) {
        console.error(error);
    }
}

async function CreateUser(req) {
    const sessionToken = req.headers.authorization.split(" ")[1];
    const user = await getCurrentUser(sessionToken);
    const { id, emailAddresses, username, imageUrl } = user;
    const email = emailAddresses && emailAddresses[0] ? emailAddresses[0].emailAddress : null;
    console.log(id, email, username, imageUrl);
    const { data, error } = await supabase
      .from('users')  // Make sure the table exists in Supabase
      .upsert({  // Upsert to avoid duplicates
        id,
        email,
        username,
        imageUrl
    });
    // console.log(user);
}

export default CreateUser;
