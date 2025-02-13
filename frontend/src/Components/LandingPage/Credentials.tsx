import React, { useState, useEffect, useRef } from "react";
import "../../Styles/LandingPageStyles/credentials.css";

interface LogoItem {
  logoSrc: string;
  representativeSrc: string,
  name: string,
  followers: string
}

const Credentials: React.FC = () => {
  
  const logos: LogoItem[] = [
    { logoSrc: "./assets/logo1.png", representativeSrc: "./assets/representative1.png", name: "Name 1", followers: "5,000 followers" },
    { logoSrc: "./assets/logo2.png", representativeSrc: "./assets/representative2.png", name: "Name 2", followers: "8,200 followers" },
    { logoSrc: "./assets/logo3.png", representativeSrc: "./assets/representative3.png", name: "Name 3", followers: "7,400 followers" },
    { logoSrc: "./assets/logo4.png", representativeSrc: "./assets/representative4.png", name: "Name 4", followers: "6,100 followers" },
    { logoSrc: "./assets/logo5.png", representativeSrc: "./assets/representative5.png", name: "Name 5", followers: "9,300 followers" },
    { logoSrc: "./assets/logo6.png", representativeSrc: "./assets/representative6.png", name: "Name 6", followers: "4,200 followers" },
    { logoSrc: "./assets/logo7.png", representativeSrc: "./assets/representative7.png", name: "Name 7", followers: "3,800 followers" },
    { logoSrc: "./assets/logo8.png", representativeSrc: "./assets/representative8.png", name: "Name 8", followers: "10,500 followers" },
  ];

  const rowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const row = rowRef.current;
    row.innerHTML += row.innerHTML;


    let scrollAmount = 0;
    const scrollSpeed = 0.7; 

    const scroll = () => {
      scrollAmount += scrollSpeed;
      row.style.transform = `translateX(${scrollAmount}px)`;

      
      if (scrollAmount >= row.offsetWidth / 2) {
        scrollAmount = 0;
      }

      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);


  const [selectedTool, setSelectedTool] = useState(null);

    const handleToolClick = (tool: any) => {
        setSelectedTool(tool);
  };

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

    <div className="powerTextContainer">
      <div className="move-powerText">
        <img src="./assets/powerToolsText.png" />
      </div>
    </div>

    <div>
      {/* Tools Next Section */}
      <div className="toolsNextContainer">
          <div className="move-toolsNext">
              <img src="./assets/toolsNextText.png" />
          </div>

          {/* Tools One */}
          <div className="move-toolsOne">
              <img src="./assets/viralityranking.png" alt="Virality Ranking" onClick={() => handleToolClick("vr")} />
              <img src="./assets/streamclipping.png" alt="Stream Clipping" onClick={() => handleToolClick("sc")} />
              <img src="./assets/aspectratio.png" alt="Aspect Ratio" onClick={() => handleToolClick("ar")} />
              <img src="./assets/aisubtitles.png" alt="AI Subtitles" onClick={() => handleToolClick("as")} />
              <img src="./assets/videoassets.png" alt="Video Assets" onClick={() => handleToolClick("va")} />
          </div>

          {/* Tools Two */}
          <div className="move-toolsTwo">
              <img src="./assets/contentanalysis.png" alt="Content Analysis" onClick={() => handleToolClick("ca")} />
              <img src="./assets/inbuilteditor.png" alt="Inbuilt Editor" onClick={() => handleToolClick("ie")} />
              <img src="./assets/aibackgrounds.png" alt="AI Backgrounds" onClick={() => handleToolClick("ab")} />
              <img src="./assets/aivoiceover.png" alt="AI Voice Over" onClick={() => handleToolClick("vo")} />
              <img src="./assets/scriptgenerator.png" alt="Script Generator" onClick={() => handleToolClick("sg")} />
          </div>
      </div>

      {/* Tools Display Section */}
      {selectedTool && (
          <div className="tools-container">
              <div className="move-tools">
                  {selectedTool === "vr" && ( 
                      <div className="vr-container">
                        <div className="vr">
                            <img src="./assets/vrText.png" />
                            <img src="./assets/vrButton.png" />
                        </div>
                        <div className="vrImg">
                            <img src="./assets/vrRec.png" />
                        </div>
                    </div>
                  )}
                  {selectedTool === "sc" && (
                      <div className="sc">
                          <img src="./assets/scText.png" />
                          <img src="./assets/scButton.png" />
                      </div>
                  )}
                  {selectedTool === "ar" && (
                      <div className="ar">
                          <img src="./assets/arText.png" />
                          <img src="./assets/arButton.png" />
                      </div>
                  )}
                  {selectedTool === "as" && (
                      <div className="as">
                          <img src="./assets/asText.png" />
                          <img src="./assets/asButton.png" />
                      </div>
                  )}
                  {selectedTool === "va" && (
                      <div className="va">
                          <img src="./assets/vaText.png" />
                          <img src="./assets/vaButton.png" />
                      </div>
                  )}
                  {selectedTool === "ca" && (
                      <div className="ca">
                          <img src="./assets/caText.png" />
                          <img src="./assets/caButton.png" />
                      </div>
                  )}
                  {selectedTool === "ie" && (
                      <div className="ie">
                          <img src="./assets/ieText.png" />
                          <img src="./assets/ieButton.png" />
                      </div>
                  )}
                  {selectedTool === "ab" && (
                      <div className="ab">
                          <img src="./assets/abText.png" />
                          <img src="./assets/abButton.png" />
                      </div>
                  )}
                  {selectedTool === "vo" && (
                      <div className="vo">
                          <img src="./assets/voText.png" />
                          <img src="./assets/voButton.png" />
                      </div>
                  )}
                  {selectedTool === "sg" && (
                      <div className="sg">
                          <img src="./assets/sgText.png" />
                          <img src="./assets/sgButton.png" />
                      </div>
                  )}
              </div>
          </div>
            )}
        </div>
    
    </>
  )
}

export default Credentials;