import './App.css';
import { useRef } from "react";
import Home from "./Components/LandingPage/Home";
import Features from './Components/LandingPage/Features';
import Prefooter from './Components/LandingPage/Prefooter';
import Header from './Components/Header';
import Testimonials from './Components/LandingPage/Testimonials';
import PreFeatures from './Components/LandingPage/PreFeatures';
import Getstarted from './Components/LandingPage/Getstarted';
import Faq from './Components/LandingPage/Faq';
import Footer from './Components/Footer';
import Credentials from './Components/LandingPage/Credentials';

function App() {
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
      <PreFeatures/>
      <Features/>
      <Testimonials/>
      <Faq/>
      <Prefooter/>
      <Footer/>

        
      
      
    </>
  );
}

export default App;
