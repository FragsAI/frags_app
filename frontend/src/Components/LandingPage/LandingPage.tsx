import React from "react";
import Home from "./Home";
import Features from './Features';
import Prefooter from './Prefooter';
import Header from '../Base/Header';
import Faq from './Faq';
import Footer from '../Base/Footer';
import Credentials from './Credentials';

const LandingPage: React.FC = () => {

  return (
    <>
      <Header/>
      <Home />
      <Credentials/>
      <Features/>
      <Faq/>
      <Prefooter/>
      <Footer/>
    </>
  );
}

export default LandingPage;
