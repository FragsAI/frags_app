import React from "react";
import "../../Styles/home.css"

const Home = () => {
  return (
    <>
        <div className="swirl-container">
            <div className="move-swirl">
                <img src="../assets/Swirl.png"/>
            </div>
        </div>

        <div className="home-content">
            <div className="hometextcontainer">
                <div className="move-hometext">
                    <h1 className="hometext-first">Create viral-ready clips </h1>
                    <h1 className="hometext-second">10x faster</h1>
                </div>
                <p id="hometext-three">Frags turns long videos into shorts, makes content easy, Saves you time, Grows you online</p>
            </div>

            <div className="bar">
                <div className='move-bar'>
                    <div className="innerbar">
                        <div className="innerbar-input">
                            <img className="bartext" src="../assets/bartext.png" alt="Bar Text" />
                            <img className="createshorts" src="../assets/Group 305.png" alt="Create Shorts" />
                            <img className="uploadvideo" src="../assets/Group 306.png" alt="Upload Video" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="slider-wrapper">
            <div>
                <img src="/assets/imageplaceholder1.png" />
            </div>
        </div>

    </>
  )
}

export default Home;