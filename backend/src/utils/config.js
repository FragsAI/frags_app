import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT
const ClerkAPIKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
export { PORT, ClerkAPIKey }