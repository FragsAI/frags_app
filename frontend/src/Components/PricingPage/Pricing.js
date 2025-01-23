import React from 'react'
import Header from "../Header"
import Footer from "../Footer"
import "../../Styles/PricingPageStyles/Pricing.css";


const Pricing = () => {
  return (
    <>
      <div>
        <Header />
        <div className="pricing-container">
          <header className="pricing-header">
            <h1>Pricing Plans</h1>
            <p>Harness AI to auto-segment your best moments, rank potential virality, and streamline your editing workflow across all platforms</p>
          </header>

          <div className="pricing-toggle">
            <button href="/pricing" className="toggle-btn">Monthly</button>
            <button className="/yearlyprice">Yearly</button>
          </div>

          {/* Pricing Cards */}
          <div className="pricing-cards">
            {/* Card 1 */}
            <div className="pricing-card">
              <h2 className="graylight">TIER 1</h2>
              <h1>$9.99/mo</h1>
              <p><span className="greenlight">Creator</span></p>
              <p className="graydark">Beginner</p>
              <hr />
              <div className="features-list">
                <p>Access to basic editing tools</p>
                <p>AI-assisted clip segmentation</p>
                <p>Export in 720p resolution</p>
                <p>10GB cloud storage</p>
                <p>Basic analytics</p>
                <p>Community support</p>
                <p>1 project at a time</p>
                <p>Watermarked exports</p>
                <p>Monthly updates</p>
              </div>
              <button className="btn btn-login">START CREATING</button>
            </div>

            {/* Card 2 */}
            <div className="pricing-card most-popular">
            <h3 className="headpop">MOST POPULAR!</h3>
              <div className="popular-wrapper">
                <div className="mostpopular">
                  <h2 className="graylight">TIER 2</h2>
                  <h1>$39.99/mo</h1>
                  <p><span className="greenlight">Clipper</span></p>
                  <p className="graydark">Intermediate</p>
                  <hr />
                  <div className="features-list">
                    <p>Advanced editing tools</p>
                    <p>AI-driven viral prediction</p>
                    <p>Export in 1080p resolution</p>
                    <p>50GB cloud storage</p>
                    <p>Detailed analytics</p>
                    <p>Email support</p>
                    <p>5 projects at a time</p>
                    <p>No watermarks</p>
                    <p>Weekly updates</p>
                  </div>
                  <button className="btn btn-signup">START CLIPPING</button>
                </div>
              </div>
            </div>

             {/* Card 3 */}
            <div className="pricing-card">
              <h2 className="graylight">TIER 3</h2>
              <h1>$69.99/mo</h1>
              <p><span className="greenlight">Fragger</span></p>
              <p className="graydark">Advanced</p>
              <hr />
              <div className="features-list">
                <p>Professional editing tools</p>
                <p>AI-driven viral optimization</p>
                <p>Export in 4K resolution</p>
                <p>Unlimited cloud storage</p>
                <p>Advanced analytics</p>
                <p>Priority support</p>
                <p>Unlimited projects</p>
                <p>Custom branding options</p>
                <p>Daily updates</p>
              </div>
              <button className="btn btn-login">START FRAG'N</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Pricing