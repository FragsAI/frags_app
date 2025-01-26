import React from 'react';
import { ClerkProvider, SignUp } from '@clerk/clerk-react';
import "../../Styles/AuthenticationStyles/SignUpStyles.css";
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
      <div className="swirl-container">
            <div className="move-swirl">
                <img src="../assets/Swirl.png"/>
            </div>
      </div>
       <div className="cube-content">
            <div className="move-cube1">
                <img id="cubeone" src="assets/cubeone.png"/>
            </div>

            <div className="move-cube2">
                <img id="cubetwo" src="assets/cubetwo.png"/>
            </div>

            <div className="move-cube3">
                <img id="cubethree" src="/assets/cubethree.png"/>
            </div>
      </div>
      <div className="move-signUp">
        <SignUp 
            publishableKey={PUBLISHABLE_KEY} 
            routing="path" 
            path="/signup"
        />
      </div>
      <Footer />
    </>
  );
}
