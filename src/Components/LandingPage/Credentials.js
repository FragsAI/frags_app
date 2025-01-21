import React, { useEffect, useRef } from "react";
import "../../Styles/LandingPageStyles/credentials.css";

const Credentials = () => {

  const logos = [
    { logoSrc: "./assets/logo1.png", representativeSrc: "./assets/representative1.png", name: "Name 1", followers: "5,000 followers" },
    { logoSrc: "./assets/logo2.png", representativeSrc: "./assets/representative2.png", name: "Name 2", followers: "8,200 followers" },
    { logoSrc: "./assets/logo3.png", representativeSrc: "./assets/representative3.png", name: "Name 3", followers: "7,400 followers" },
    { logoSrc: "./assets/logo4.png", representativeSrc: "./assets/representative4.png", name: "Name 4", followers: "6,100 followers" },
    { logoSrc: "./assets/logo5.png", representativeSrc: "./assets/representative5.png", name: "Name 5", followers: "9,300 followers" },
    { logoSrc: "./assets/logo6.png", representativeSrc: "./assets/representative6.png", name: "Name 6", followers: "4,200 followers" },
    { logoSrc: "./assets/logo7.png", representativeSrc: "./assets/representative7.png", name: "Name 7", followers: "3,800 followers" },
    { logoSrc: "./assets/logo8.png", representativeSrc: "./assets/representative8.png", name: "Name 8", followers: "10,500 followers" },
  ];

  const rowRef = useRef(null);

  useEffect(() => {
    const row = rowRef.current;
    row.innerHTML += row.innerHTML;


    let scrollAmount = 0;
    const scrollSpeed = 2; 

    const scroll = () => {
      scrollAmount += scrollSpeed;
      row.style.transform = `translateX(-${scrollAmount}px)`;

      
      if (scrollAmount >= row.offsetWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);



  return (
    <>
    <div className="container">
      <div className="credentials-text-container">
        <div className="move-credentials-text">
          <img src="./assets/credentialsText.png" />
        </div>
      </div>

      <div className="logo-container">
        <div className="logo-row" ref={rowRef}>
          {logos.map((item, index) => (
            <div key={index} className="logo-item">
              <img src={item.logoSrc} alt={`Logo ${index + 1}`} className="logo-img" />
              <img
                src={item.representativeSrc}
                alt={`Representative ${index + 1}`}
                className="representative-img"
              />
              <p className="representative-name">{item.name}</p>
              <p className="representative-followers">{item.followers}</p>
            </div>
          ))}
          {logos.map((item, index) => (
            <div key={`duplicate-${index}`} className="logo-item">
              <img src={item.logoSrc} alt={`Logo ${index + 1}`} className="logo-img" />
              <img
                src={item.representativeSrc}
                alt={`Representative ${index + 1}`}
                className="representative-img"
              />
              <p className="representative-name">{item.name}</p>
              <p className="representative-followers">{item.followers}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Credentials;