import jwt from 'jsonwebtoken';
import { createClient } from '@supabase/supabase-js';
import config from '../utils/config.js';

export function createSupabaseJWT(userUUID) {
  const payload = {
    sub: userUUID,
    role: 'authenticated'
  };

  return jwt.sign(payload, process.env.SUPABASE_JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '1h',
  });
}

export function createSupabaseClientWithUUID(userUUID) {
  const token = createSupabaseJWT(userUUID);

  return createClient(config.DB_URI, config.DB_KEY, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });
}
