import './App.css';
import { useRef } from "react";
import Home from "./Components/Home";

function App() {
  const home = useRef(null);
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
  };


  return (
    <>
      <div className="parent-container">
          <div id="Frags">
            <h1 ref={home}>Frags</h1>
          </div>
          <div id="content-header">
            <h1 onClick={() => scrollToSection(features)}>Features</h1>
            <h1>Pricing</h1>
            <h1>Log in</h1>
            <h1>Sign up</h1>
          </div>
      </div>

      <Home />
     
      <div className="sections">
        <div className="testimonials-section">
          <h3 id="textimonialsText">Trusted by 100+ businesses</h3>
        </div>

        <div className="features-section" ref={features}>
          <h3 id="featuresText">10x Your Gaming Content, 100 Hours Saved Monthly</h3>
        </div>

        <div className="faq-section">
          <h3 id="faqText">FAQs</h3>
        </div>

        <div className="footer-section">
          <h3 id="footerText">footer</h3>
        </div>
      </div>
      
    </>
  );
}

export default App;
