import { createClient } from '@supabase/supabase-js'
import * as config from '../utils/config'

const supabase = createClient(config.DB_URI, config.DB_KEY)

export default supabase