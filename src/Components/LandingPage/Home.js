import React, { useEffect, useRef, useState } from "react";
import "../../Styles/home.css"

const Home = () => {
    const containerRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start at index 1 (first actual image)
    const images = Array.from({ length: 3 });
  
    useEffect(() => {
      const container = containerRef.current;
      const moveImages = container.querySelector(".move-image");
      const imageWidth = 700 + 100; 
      const offset = (container.offsetWidth - imageWidth) / 2; 
  
 
      moveImages.style.transition = "transform 0.5s ease";
      moveImages.style.transform = `translateX(-${
        currentImageIndex * imageWidth - offset
      }px)`;
  

      const handleTransitionEnd = () => {
        moveImages.style.transition = "none";
        if (currentImageIndex === 0) {
          setCurrentImageIndex(images.length); 
        } else if (currentImageIndex === images.length + 1) {
          setCurrentImageIndex(1); 
        }
      };
  
      moveImages.addEventListener("transitionend", handleTransitionEnd);
  
      return () => {
        moveImages.removeEventListener("transitionend", handleTransitionEnd);
      };
    }, [currentImageIndex, images.length]);
  
    const handlePrevClick = () => {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    };
  
    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length + 1 ? 1 : prevIndex + 1
        );
    };
  
    const handleDotClick = (index) => {
    const targetIndex = index + 1; 
        if (targetIndex > currentImageIndex) {
            handleNextClick();
        } else if (targetIndex < currentImageIndex) {
            handlePrevClick();
        }
    };

  return (
    <>
        <div className="icons-content">
            <div className='move-icon1'>
                <img src="./assets/icon1.png" />
            </div>
            <div className='move-icon2'>
                <img src="./assets/icon2.png" />
            </div>
            <div className='move-icon3'>
                <img src="./assets/icon3.png" />
            </div>
            <div className='move-icon4'>
                <img src="./assets/icon4.png" />
            </div>
            <div className='move-icon5'>
                <img src="./assets/icon5.png" />
            </div>
            <div className='move-icon6'>
                <img src="./assets/icon6.png" />
            </div>
        </div>


        <div className="swirl-container">
            <div className="move-swirl">
                <img src="../assets/Swirl.png"/>
            </div>
        </div>

        <div className="home-content">
            <div className="hometextcontainer">
                <div className="move-hometext">
                    <img className="hometextimg" src="./assets/homeText.png"/>
                </div>
            </div>

            <div className="bar">
                <div className='move-bar'>
                    <div className="innerbar">
                        <div className="innerbar-border">
                            <div className="innerbar-input">
                                <img className="bartext" src="../assets/bartext.png" alt="Bar Text" />
                                <img className="createshorts" src="../assets/Group 305.png" alt="Create Shorts" />
                                <img className="uploadvideo" src="../assets/Group 306.png" alt="Upload Video" />
                            </div>
                        </div>
                    </div>
                </div>
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

        <div className='iphone-content'>
            <div className='move-iphoneImg'>
                <img id="iphoneone" src="./assets/iPhone.png" />
                <img id="iphonetwo" src="./assets/iPhone.png" />
                <img id="iphonethree" src="./assets/iPhone.png" />
            </div>
        </div>

        <div className="carousel-container">
        <div className="image-container" ref={containerRef}>
            <div className="move-image">
               
                <img
                key={`clone-start`}
                src={`../assets/imageplaceholder${images.length}.png`}
                alt={`Placeholder ${images.length}`}
                />
                {images.map((_, index) => (
                <img
                    key={`image-${index}`}
                    src={`../assets/imageplaceholder${index + 1}.png`}
                    alt={`Placeholder ${index + 1}`}
                    className={currentImageIndex === index + 1 ? "highlighted" : ""}
                />
                ))}
         
                <img
                key={`clone-end`}
                src={`../assets/imageplaceholder1.png`}
                alt="Placeholder 1"
                />
            </div>
        </div>
    
      <div className="indicator-bar">
        {images.map((_, index) => (
        <span
        key={index}
        onClick={() => handleDotClick(index)}
        className={`indicator-dot ${
            currentImageIndex === index + 1 ? "active" : ""
        }`}
        ></span>
        ))}
      </div>
    </div>
    </>
  )
}

export default Home;