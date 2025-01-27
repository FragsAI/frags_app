import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const DB_URI = (process.env.NODE_ENV === 'production') ? process.env.SUPABASE_URL : process.env.TEST_SUPABASE_URL
const DB_KEY = (process.env.NODE_ENV === 'production') ? process.env.SUPABASE_KEY : process.env.TEST_SUPABASE_KEY
const STRIPE_PUBLIC = process.env.STRIPE_PUBLISHABLE_KEY
const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY
const CLERK_PUBLIC = process.env.CLERK_PUBLISHABLE_KEY
const CLERK_SECRET = process.env.CLERK_SECRET_KEY

export { PORT, DB_URI, DB_KEY, STRIPE_PUBLIC, STRIPE_SECRET }
