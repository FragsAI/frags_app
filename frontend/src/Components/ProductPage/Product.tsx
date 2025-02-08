import React from 'react'
import "../../Styles/product.css"
import Header from "../Header"
import Footer from "../Footer"

const Product: React.FC = () => {
  return (
    <>
    <div>
      <Header/>
    <div className="product-content">
        <div className='move-featuresText'>
            <img src="./assets/featuresText.png" />
        </div>
        <div className="features-featuresImg">
            <img src="./assets/featuresColOne.png" />
            <img src="./assets/featuresColTwo.png" />
        </div>
    </div>
    <Footer/>
    </div>

    </>
  )
}

export default Product