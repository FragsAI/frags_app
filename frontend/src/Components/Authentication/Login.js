import React from 'react';
import { ClerkProvider, SignIn } from '@clerk/clerk-react';
import "../../Styles/AuthenticationStyles/LoginStyles.css";
import Header from "../Header";
import Footer from "../Footer"

const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Clerk Publishable Key is missing. Add it to your .env.local file.');
}

export default function SignUpPage() {
  return (
    <>
      <Header />
      <div className="move-signIn">
        < SignIn />
      </div>
      <Footer />
    </>
  );
}
