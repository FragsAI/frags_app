import React from 'react'
import Header from "./Header"
import "./../Styles/pricing.css"

const Pricing = () => {
  return (
    <>
    <Header />
    
    <div className="pricing-content">
        <div className='move-featuresText'>
            <img src="./assets/featuresText.png" />
        </div>
        <div className="features-featuresImg">
            <img src="./assets/featuresColOne.png" />
            <img src="./assets/featuresColOne.png" />
        </div>
    </div>

    </>
  )
}

export default Pricing