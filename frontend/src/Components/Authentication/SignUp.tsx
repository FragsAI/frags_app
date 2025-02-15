import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import { useLocation } from 'react-router-dom'
import Header from "../Base/Header";
import Footer from "../Base/Footer"

const SignUpPage: React.FC = () => {
  const location = useLocation()
  const from = location.state?.from.pathname || '/'

//   <SignUp 
//   routing="path" 
//   path="/signup"
//   signInUrl="/login"
//   fallbackRedirectUrl={from}
// />


  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
      <SignUp 
        appearance={{
          elements: {
            rootBox: "bg-[#1A1A1C]",
            footer: "bg-[#1A1A1C]",
          },
        }}
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
