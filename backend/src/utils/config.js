import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
let DB_URI
let DB_KEY

if (process.env.NODE_ENV === 'test') {
    DB_URI = process.env.TEST_SUPABASE_URL
    DB_KEY = process.env.TEST_SUPABASE_KEY
} else {
    DB_URI = process.env.SUPABASE_URL
    DB_KEY = process.env.SUPABASE_KEY
}

const STRIPE_PUBLIC = process.env.STRIPE_PUBLISHABLE_KEY
const STRIPE_SECRET = process.env.STRIPE_SECRET_KEY

export { PORT, DB_URI, DB_KEY, STRIPE_PUBLIC, STRIPE_SECRET }