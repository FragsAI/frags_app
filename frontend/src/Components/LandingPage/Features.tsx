import React from 'react'
import "../../Styles/LandingPageStyles/features.css";

const Features: React.FC = () => {
  return (
    <>
    
    {/* <div className="features-content">
      <div className="move-row-one">
        <div className="rowOneImg">
          <img id="iphone1" src="./assets/iPhone.png"/>
          <img id="iphone2" src="./assets/iPhone.png"/>
          <img id="iphone3" src="./assets/iPhone.png"/>
        </div>
        <div className="rowOneText">
          <img id="textOneA" src="./assets/textRowOneA.png" />
          <img id="textOneB" src="./assets/textRowOneB.png" />
          <img id="textOneC" src="./assets/textRowOneC.png" />
        </div>
      </div>
      <div className="move-row-two">
        <div className="rowTwoText">
          <img id="textTwoA" src="./assets/textRowTwoA.png" />
          <img id="textTwoB" src="./assets/textRowTwoB.png" />
          <img id="textTwoC" src="./assets/textRowTwoC.png" />
        </div>
        <div className="rowTwoImg">
          <img id="rowTwoImage" src="./assets/rowTwoImg.png"/>
        </div>
      </div>
      <div className="move-row-three">
        <div className="rowThreeImg">
            <img id="rowThreeImage" src="./assets/rowThreeImg.png"/>
        </div>
        <div className="rowThreeText">
            <img id="textThreeA" src="./assets/textRowThreeA.png" />
            <img id="textThreeB" src="./assets/textRowThreeB.png" />
            <img id="textThreeC" src="./assets/textRowThreeC.png" />
        </div>
      </div>
      <div className="move-row-four">
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
      </div>
    </div> */}

    <div className="features-content">
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
    </div>

    <div className="buttons-content">
      <div>
          <img src="./assets/morePricePlanButton.png" />
          <img src="./assets/startFragButton.png" />
      </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Features;