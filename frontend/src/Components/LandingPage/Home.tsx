import React from "react";
import "../../Styles/home.css"

const Home: React.FC = () => {
  return (
    <>
        {/* <div className="swirl-container">
            <div className="move-swirl">
                <img src="../assets/Swirl.png"/>
            </div>
        </div> */}

        <div className="home-content">
            <div className="hometextcontainer">
                <div className="move-hometext">
                    <h1 className="hometext-first">Create viral-ready clips 10x faster</h1>
                    {/* <h1 className="hometext-second">10x faster</h1> */}
                </div>
                <p id="hometext-three">Frags turns long videos into shorts, makes content easy, Saves you time, Grows you online</p>
            </div>

            <div className="bar">
                <div className='move-bar'>
                    <div className="innerbar">
                        <div className="innerbar-input">
                            <img className="bartext" src="../assets/bartext.png" alt="Bar Text" />
                            <div className="button-group">
                                <div id="createShorts" className="createshorts">Create free clips</div>
                                <div className="uploadvideo">Upload Video</div>
                            </div>
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