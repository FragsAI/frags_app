import React from 'react'
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
                    <img className="hometextimg" src="./assets/homeText.png"/>
                </div>
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

        <div className="image-container">
            <div className="move-image">
                <img src="../assets/imageplaceholder.png"/>
            </div>
        </div>

    
    </>
  )
}

export default Home;