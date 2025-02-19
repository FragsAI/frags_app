import React, { useState, useEffect, useRef } from "react";

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
      <div className="flex flex-col items-center justify-center w-full h-screen box-border max-w-[1200px] mx-auto px-5">
        <div className="flex justify-center items-center w-full text-center box-border mt-0">
          <div className="move-credentials-text">
            <img src="./assets/credentialsText.png" className="max-w-full h-auto object-contain mx-auto" />
          </div>
        </div>

        <div className="flex justify-center items-center mt-24 w-[90%] max-w-[1200px] box-border scroll-smooth">
          <div className="flex items-start gap-[60px] w-max" ref={rowRef}>
            {logos.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2.5 flex-none">
                <img src={item.logoSrc} alt={`Logo ${index + 1}`} className="w-[100px] h-auto object-contain mb-24" />
                <img
                  src={item.representativeSrc}
                  alt={`Representative ${index + 1}`}
                  className="w-20 h-auto object-contain"
                />
                <p className="text-base text-white m-0 mt-0.5">{item.name}</p>
                <p className="text-sm text-[#717383] m-0">{item.followers}</p>
              </div>
            ))}
            {logos.map((item, index) => (
              <div key={`duplicate-${index}`} className="flex flex-col items-center gap-2.5 flex-none">
                <img src={item.logoSrc} alt={`Logo ${index + 1}`} className="w-[100px] h-auto object-contain mb-24" />
                <img
                  src={item.representativeSrc}
                  alt={`Representative ${index + 1}`}
                  className="w-20 h-auto object-contain"
                />
                <p className="text-base text-white m-0 mt-0.5">{item.name}</p>
                <p className="text-sm text-[#717383] m-0">{item.followers}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="powerTextContainer">
        <div className="flex justify-center mb-48">
          <img src="./assets/powerToolsText.png" />
        </div>
      </div>

      <div>
        {/* Tools Next Section */}
        <div className="toolsNextContainer">
          <div className="flex justify-center items-center w-full p-5">
            <img src="./assets/toolsNextText.png" className="w-[clamp(300px,60%,800px)] h-auto object-contain" />
          </div>

          {/* Tools One */}
          <div className="flex flex-row justify-center items-center gap-5 flex-wrap mt-12">
            <img 
              src="./assets/viralityranking.png" 
              alt="Virality Ranking" 
              onClick={() => handleToolClick("vr")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img 
              src="./assets/streamclipping.png" 
              alt="Stream Clipping" 
              onClick={() => handleToolClick("sc")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img 
              src="./assets/aspectratio.png" 
              alt="Aspect Ratio" 
              onClick={() => handleToolClick("ar")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img 
              src="./assets/aisubtitles.png" 
              alt="AI Subtitles" 
              onClick={() => handleToolClick("as")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img 
              src="./assets/videoassets.png" 
              alt="Video Assets" 
              onClick={() => handleToolClick("va")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>

          {/* Tools Two */}
          <div className="flex flex-row justify-center items-center gap-5 flex-wrap mt-12">
            <img 
              src="./assets/contentanalysis.png" 
              alt="Content Analysis" 
              onClick={() => handleToolClick("ca")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img 
              src="./assets/inbuilteditor.png" 
              alt="Inbuilt Editor" 
              onClick={() => handleToolClick("ie")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img 
              src="./assets/aibackgrounds.png" 
              alt="AI Backgrounds" 
              onClick={() => handleToolClick("ab")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img 
              src="./assets/aivoiceover.png" 
              alt="AI Voice Over" 
              onClick={() => handleToolClick("vo")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <img 
              src="./assets/scriptgenerator.png" 
              alt="Script Generator" 
              onClick={() => handleToolClick("sg")} 
              className="w-[clamp(120px,15vw,200px)] h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Tools Display Section */}
        {selectedTool && (
          <div className="tools-container">
            <div className="move-tools">
              {selectedTool === "vr" && (
                <div className="flex flex-row justify-center items-center gap-10 w-full flex-wrap m-[clamp(50px,8vw,100px)]">
                  <div className="flex flex-col items-center text-center gap-12 mr-[clamp(40px,8vw,100px)]">
                    <img src="./assets/vrText.png" className="w-[clamp(250px,40vw,500px)] h-auto object-contain" />
                    <img src="./assets/vrButton.png" className="w-auto h-auto max-w-full self-start hover:scale-110" />
                  </div>
                  <div className="flex flex-col items-center text-center gap-12 mr-[clamp(40px,8vw,100px)]">
                    <img src="./assets/vrRec.png" className="w-[clamp(250px,40vw,500px)] h-auto object-contain" />
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