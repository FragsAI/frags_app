import React from 'react';
import { ClerkProvider, SignIn } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Clerk Publishable Key is missing. Add it to your .env.local file.');
}

export default function SignUpPage() {
  return (
   
      <SignIn />

  );
}
