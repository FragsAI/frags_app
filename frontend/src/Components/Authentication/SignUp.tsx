import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { useLocation } from 'react-router-dom'
import "../../Styles/AuthenticationStyles/SignUpStyles.css";
import Header from "../Header";
import Footer from "../Footer"

const SignUpPage: React.FC = () => {
  const location = useLocation()
  const from = location.state?.from.pathname || '/'

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
            routing="path" 
            path="/signup"
            signInUrl="/login"
            fallbackRedirectUrl={from}
        />
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage
