import React from 'react';
import "../../Styles/PricingPageStyles/FreePackage.css";

export default function FreePackage() {
  return (
    <>
    <div className="freePackage">
    <div className="free-package-container">
      {/* First Div */}
      <div className="free-package-div">
      <h2 className="graylight">FREE</h2>
              <h1><span className="white">$0</span><span className="graygray">/mo</span></h1>
              <p><span className="greenlight">Creator</span></p>
              <p className="graydark">Beginner</p>
      </div>
      <div className="line">
      <hr className="vertical-line" />
      </div>

      {/* Second Div */}
      <div className="free-package-div">
        <ul>
          <li>
            <p>List 1, Item 1</p>
            <p>List 1, Item 2</p>
          </li>
          <li>
            <p>List 2, Item 1</p>
            <p>List 2, Item 2</p>
          </li>
          <li>
            <p>List 3, Item 1</p>
            <p>List 3, Item 2</p>
          </li>
        </ul>
      </div>

      {/* Third Div */}
      <div className="free-package-div">
        <ul>
          <li><p>List 4, Item 1</p></li>
          <li><p>List 4, Item 2</p></li>
          <li><p>List 4, Item 3</p></li>
          <li><p>List 4, Item 4</p></li>
          <li><p>List 4, Item 5</p></li>
          <li><p>List 4, Item 6</p></li>
          <li><p>List 4, Item 7</p></li>
        </ul>
      </div>
    </div>
    </div>
    </>
  );
}
