import './App.css';
import React, { useRef, } from "react";
import Home from "./components/LandingPage/Home";
import Features from './components/LandingPage/Features';
import Prefooter from './components/LandingPage/Prefooter';
import Header from './components/Base/Header';
import Testimonials from './components/LandingPage/Testimonials';
import Getstarted from './components/LandingPage/Getstarted';
import Faq from './components/LandingPage/Faq';
import Footer from './components/Base/Footer';
import Credentials from './components/LandingPage/Credentials';

const App: React.FC = () => {
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
      <Credentials/>
      <Getstarted/>
      <Features/>
      <Testimonials/>
      <Faq/>
      <Prefooter/>
      <Footer/>
    </>
  );
}

export default App;
