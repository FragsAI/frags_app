import React from 'react'
import "../../Styles/LandingPageStyles/getstarted.css"

const Getstarted = () => {
  return (
    <div className="getstarted-container">
      {/* Upper Div with Gradient Text */}
      <div className="gradient-text">
      <h1>
          Create frags viral clips in just <span className="gradient">3 <br></br>simple steps</span>
        </h1>
        <p>Increase your clicks instantly, how I don't know but I was told it will work</p>
      </div>

      {/* Lower Div with 3 Small Divs */}
      <div className="small-divs-container">
        <div className="small-div">
          <div className="content">
            <h2><span className='lightgreen'>STEP 1:</span> Upload</h2>
            <p>"Simply upload your raw gaming footage"</p>
          </div>
          <img src="./assets/iPad1.png" alt="Step 1" className="image" />
        </div>
        <div className="small-div">
          <div className="content">
            <h2><span className='lightgreen'>STEP 2:</span> AI Magic</h2>
            <p>"Our AI analyzes and processes content"</p>
          </div>
          <img src="./assets/iPad1.png" alt="Step 2" className="image" />
        </div>
        <div className="small-div">
          <div className="content">
            <h2><span className='lightgreen'>STEP 3:</span> Viral Ready</h2>
            <p>"Download or publish optimized clips across platforms"</p>
          </div>
          <img src="./assets/iPad1.png" alt="Step 3" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Getstarted;