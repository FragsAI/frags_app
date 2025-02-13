import React from 'react'
import "../../Styles/LandingPageStyles/features.css";

const Features: React.FC = () => {
  return (
    <>
    
    <div className="features-content">
      <div className="move-row-one">
      <div className="rowOneText">
          <img id="textOneA" src="./assets/textOne.png" />
        </div>
        <div className="rowOneImg">
          <img src="./assets/RecOne.png"/>
        </div>
      </div>
      <div className="move-row-two">
        <div className="rowTwoImg">
          <img id="rowTwoImage" src="./assets/RecTwo.png"/>
        </div>
        <div className="rowTwoText">
          <img id="textTwoA" src="./assets/textTwo.png" />
        </div>
      </div>
      <div className="move-row-three">
      <div className="rowThreeText">
            <img id="textThreeA" src="./assets/textThree.png" />
        </div>
        <div className="rowThreeImg">
            <img id="rowThreeImage" src="./assets/RecThree.png"/>
        </div>
      </div>
      {/* <div className="move-row-four">
        <div className="rowFourText">
            <img id="textFourA" src="./assets/textRowFourA.png" />
            <img id="textFourB" src="./assets/textRowFourB.png" />
            <img id="textFourC" src="./assets/textRowFourC.png" />
        </div>
        <div className="rowFourImg">
          <img id="iphone4" src="./assets/iPhone.png"/>
          <img id="iphone5" src="./assets/iPhone.png"/>
          <img id="iphone6" src="./assets/iPhone.png"/>
        </div>
      </div> */}
    </div>

    {/* <div className="features-content">
        <div className="move-features-content">
          <img className="colTexts" src="./assets/ColTextOne.png" />
          <img className="colImg" src="./assets/ColFrameOne.png" />
          <img className="colTexts" src="./assets/ColTextTwo.png" />
          <img className="colImg" src="./assets/ColFrameTwo.png" />
          <img className="colTexts" src="./assets/ColTextThree.png" />
          <img className="colImg" src="./assets/ColFrameThree.png" />
          <img className="colTexts" src="./assets/ColTextFour.png" />
          <img className="colImg" src="./assets/ColFrameFour.png" />
          <img className="colTexts" src="./assets/ColTextFive.png" />
          <img className="colImg" src="./assets/ColFrameFive.png" />
        </div>
    </div> */}

    {/* <div className="buttons-content">
      <div>
          <img src="./assets/morePricePlanButton.png" />
          <img src="./assets/startFragButton.png" />
      </div>
    </div> */}
    
    
    <div className="join-comm-container">
      <div className='move-join-comm'>
        <img src="./assets/joinCommunityText.png" />
        <img src="./assets/stats.png" />
      </div>
    </div>
    
    
    </>
  )
}

export default Features;