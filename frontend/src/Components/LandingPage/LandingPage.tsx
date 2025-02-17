import React from "react";
import Home from "./Home";
import Features from './Features';
import Prefooter from './Prefooter';
import Header from '../Base/Header';
import Testimonials from './Testimonials';
import Getstarted from './Getstarted';
import Faq from './Faq';
import Footer from '../Base/Footer';
import Credentials from './Credentials';

const LandingPage: React.FC = () => {
  /*const home = useRef(null);
  const features = useRef(null);

  const scrollToSection = (elementRef) => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        bottom: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.error("Ref is null or undefined");
    }
  };*/


  return (
    <>
      <Header/>
      <Home />
      {/* <Credentials/> */}
      <Getstarted/>
      <Features/>
      <Testimonials/>
      <Faq/>
      <Prefooter/>
      <Footer/>
    </>
  );
}

export default LandingPage;
