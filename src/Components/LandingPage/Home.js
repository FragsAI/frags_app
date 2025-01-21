import React, { Component } from "react";
import "../../Styles/home.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        centerPadding: "400px",
        customPaging: () => <div className="custom-dot"></div>, 
        appendDots: (dots) => (
          <div style={{ bottom: "-50px" }}>
            <ul style={{ margin: "0px", padding: "0px" }}>{dots}</ul>
          </div>
        ),
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              centerPadding: "100px", 
            },
          },
          {
            breakpoint: 768,
            settings: {
              centerPadding: "50px", 
            },
          },
        ],
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

        <div className="slider-wrapper">
            <Slider {...settings}>
                <div>
                    <img src="/assets/imageplaceholder1.png" />
                </div>
                <div>
                    <img src="/assets/imageplaceholder2.png" />
                </div>
                <div>
                    <img src="/assets/imageplaceholder3.png" />
                </div>
                <div>
                    <img src="/assets/imageplaceholder4.png" />
                </div>
            </Slider>
      </div>

    </>
  )
}

export default Home;