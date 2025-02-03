import { createClient } from '@supabase/supabase-js'
import { clerkClient } from '@clerk/express'
import config from '../utils/config'

const createSupabase = async (sessionID) => {
    const clerkToken = await clerkClient.sessions.getToken(sessionID, "supabase-jwt")
    const supabase = createClient(
        config.DB_URI,
        config.DB_KEY,
        {
            global: {
                headers: { Authorization: `Bearer ${clerkToken.jwt}`}
            }
        }
    )
    return supabase
}

export default createSupabase
