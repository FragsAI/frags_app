import React from 'react'
import "../../Styles/LandingPageStyles/home.css"

const Home = () => {
  return (
    <>
        <div className="swirl-container">
            <div className="move-swirl">
                <img src="../assets/Swirl.png"/>
            </div>
        </div>
        <div className="phones-container">
            <div className="center-box">
            <div className="phone-layer3">
                    <div className="phone-borderleft3">
                        <div className="phone-border">
                            <img src="../assets/phone.png"/>
                        </div>
                    </div>
                    <div className="phone-borderright3">
                        <div className="phone-border">
                            <img src="../assets/phone.png"/>
                        </div>
                    </div>
                </div>
                <div className="phone-layer2">
                    <div className="phone-borderleft">
                        <div className="phone-border">
                            <img src="../assets/phone.png"/>
                        </div>
                    </div>
                    <div className="phone-borderright">
                        <div className="phone-border">
                            <img src="../assets/phone.png"/>
                        </div>
                    </div>
                </div>
                <div className="phone-border">
                    <img src="../assets/phone.png"/>
                </div>
            </div>
        </div>

        <div className="cubes">
            <div className="move-cube1">
                <img src="../assets/Rectangle 4.png"/>
            </div>
            <div className="move-cube2">
                <img src="../assets/Rectangle 5.png"/>
            </div>
            <div className="move-cube3">
                <img src="../assets/Rectangle 6.png"/>
            </div>
        </div>

        <div className="bar">
            <div className='move-bar'>
                <div className='bar-border'>
                    <img className="bartext" src="../assets/bartext.png" />
                    <img className="innerbar" src="../assets/Rectangle 70.png" />
                    <img className="createshorts" src="../assets/Group 305.png" />
                    <img className="uploadvideo" src="../assets/Group 306.png" />
                </div>
            </div>
        </div>
    
    
    </>
  )
}

export default Home;