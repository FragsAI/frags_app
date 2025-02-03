import React from 'react';
import "../../Styles/PricingPageStyles/FreePackage.css";

export default function FreePackage() {
  return (
    <>
    <div className="freePackage">
    <div className="free-package-container">
      {/* First Div */}
      <div className="free-package-div1">
      <h2 className="graylight">FREE</h2>
              <h1><span className="white">$0</span><span className="graygray">/mo</span></h1>
              <p><span className="greenlight">Try it Out</span></p>
              <p className="graydark">Free Forever</p>
                <button className="btn btn-login grayborder">CREATE ACCOUNT</button>
             
      </div>
      <div className="line">   
      <hr className="vertical-line" />
      </div>

      {/* Second Div */}
      <div className="free-package-div">
        
                <div className="feature-item1">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Virality Ranking</p>
                </div>
                <div className="feature-item1">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Stream Clipping</p>
                </div>
            
      </div>

      {/* Third Div */}
      <div className="free-package-div">
      <div className="feature-item1">
                  <img src="../assets/Vector (2).png" alt="tick" className="tick-icon" />
                  <p className="tickp">No Aspect Ratio</p>
                </div>
                <div className="feature-item1">
                  <img src="../assets/Vector (2).png" alt="tick" className="tick-icon" />
                  <p className="tickp">No AI Subtitles</p>
                </div>
                <div className="feature-item1">
                  <img src="../assets/Vector (2).png" alt="tick" className="tick-icon" />
                  <p className="tickp">No Video Assets</p>
                </div>
                <div className="feature-item1">
                  <img src="../assets/Vector (2).png" alt="tick" className="tick-icon" />
                  <p className="tickp">No AI Voiceover</p>
                </div>
                <div className="feature-item1">
                  <img src="../assets/Vector (2).png" alt="tick" className="tick-icon" />
                  <p className="tickp">No Script Generator</p>
                </div>
                <div className="feature-item1">
                  <img src="../assets/Vector (2).png" alt="tick" className="tick-icon" />
                  <p className="tickp">No In-built Editor</p>
                </div>
                <div className="feature-item1">
                  <img src="../assets/Vector (2).png" alt="tick" className="tick-icon" />
                  <p className="tickp">No AI Backgrounds</p>
                </div>
      </div>
    </div>
    </div>
    </>
  );
}
