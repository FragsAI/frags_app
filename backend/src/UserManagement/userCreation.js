import { clerkClient } from "@clerk/express";
import { supabase } from "../config/supabase";
// import { Clerk } from "@clerk/clerk-sdk-node";
// async function getSessionTokenForUser(userId) {
//     try {
//       const session = await clerkClient.sessions.create({ userId });
//       return session.session_token;  // This is the session token
//     } catch (error) {
//       console.error("Error creating session:", error);
//       return null;
//     }
//   }

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
    console.log(user);
    // const { email, password, name } = user;
    // const { email, password, name } = user;
    // console.log(email, password, name);
    // const { data, error } = await supabase.auth.signUp({
    //     email,
    //     password,
    // });
    // if (error) {
    //     console.error(error);
    //     return {
    //         status: 500,
    //         body: error,
    //     };
    // }
    // const { user } = data;
    // await supabase.from("profiles").upsert([
    //     {
    //         id: user.id,
    //         name,
    //     },
    // ]);
    // return {
    //     status: 200,
    //     body: user,
    // };
}

export default CreateUser;
