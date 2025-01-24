import React from 'react';
import Header from "../Header";
import { useLocation, Link } from 'react-router-dom'; // Import Link for navigation
import Footer from "../Footer";
import "../../Styles/PricingPageStyles/Pricing.css";
import FreePackage from './FreePackage';
import PricingFaq from "./PricingFaq"

const Pricing = () => {
  const location = useLocation(); // Get the current location

  // Determine if the current page is /pricing or /yearlyprice
  const isMonthlyPage = location.pathname === '/pricing'; // Default path for Monthly
  const isYearlyPage = location.pathname === '/yearlyprice';

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
            <Link to="/pricing" className={`monthly-btn ${isMonthlyPage ? 'active' : 'inactive'}`}>
              Monthly
            </Link>
            <Link to="/yearlyprice" className={`yearly-btn ${isYearlyPage ? 'active' : 'inactive'}`}>
              Yearly
            </Link>
          </div>
          <p className="lightgreen subtitle">Save up to xx% with annual billing</p>

          {/* Pricing Cards */}
          <div className="pricing-cards">
            {/* Card 1 */}
            <div className="pricing-card">
              <h2 className="graylight">TIER 1</h2>
              <h1>$9.99/monthly</h1>
              <p><span className="greenlight">Creator</span></p>
              <p className="graydark">Beginner</p>
              <hr />
              <div className="features-list">
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Virality Ranking</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Stream Clipping</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Aspect Ratio</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">AI Subtitles</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Video Assets</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Group 39566.png" alt="tick" className="tick-icon" />
                  <p className="untickp">AI Voiceover</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Group 39566.png" alt="tick" className="tick-icon" />
                  <p className="untickp">Script Generator</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Group 39566.png" alt="tick" className="tick-icon" />
                  <p className="untickp">In-built Editor</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Group 39566.png" alt="tick" className="tick-icon" />
                  <p className="untickp">AI Backgrounds</p>
                </div>
              </div>
              <button className="btn btn-login">START CREATING</button>
            </div>

            {/* Card 2 */}
            <div className="pricing-card most-popular">
              <h3 className="headpop">MOST POPULAR!</h3>
              <div className="popular-wrapper">
                <div className="mostpopular">
                  <h2 className="graylight">TIER 2</h2>
                  <h1>$39.99/monthly</h1>
                  <p><span className="greenlight">Clipper</span></p>
                  <p className="graydark">Intermediate</p>
                  <hr />
                  <div className="features-list">
                    <div className="feature-item">
                      <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                      <p className="tickp">Access to basic editing tools</p>
                    </div>
                    <div className="feature-item">
                      <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                      <p className="tickp">Virality Ranking</p>
                    </div>
                    <div className="feature-item">
                      <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                      <p className="tickp">Stream Clipping</p>
                    </div>
                    <div className="feature-item">
                      <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                      <p className="tickp">Aspect Ratio</p>
                    </div>
                    <div className="feature-item">
                      <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                      <p className="tickp">AI Subtitles</p>
                    </div>
                    <div className="feature-item">
                      <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                      <p className="tickp">Video Assets</p>
                    </div>
                    <div className="feature-item">
                      <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                      <p className="tickp">AI Voiceover</p>
                    </div>
                    <div className="feature-item">
                      <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                      <p className="tickp">Script Generator</p>
                    </div>
                    <div className="feature-item">
                      <img src="../assets/Group 39566.png" alt="tick" className="tick-icon" />
                      <p className="untickp">In-built Editor</p>
                    </div>
                    <div className="feature-item">
                      <img src="../assets/Group 39566.png" alt="tick" className="tick-icon" />
                      <p className="untickp">AI Backgrounds</p>
                    </div>
                  </div>
                  <button className="btn btn-signup">START CLIPPING</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="pricing-card">
              <h2 className="graylight">TIER 3</h2>
              <h1>$69.99/monthly</h1>
              <p><span className="greenlight">Fragger</span></p>
              <p className="graydark">Advanced</p>
              <hr />
              <div className="features-list">
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Virality Ranking</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Stream Clipping</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Aspect Ratio</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">AI Subtitles</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Video Assets</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">AI Voiceover</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">Script Generator</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">In-built Editor</p>
                </div>
                <div className="feature-item">
                  <img src="../assets/Vector.png" alt="tick" className="tick-icon" />
                  <p className="tickp">AI Backgrounds</p>
                </div>
              </div>
              <button className="btn btn-login">START FRAGGING</button>
            </div>
          </div>
        </div>
        <FreePackage/>
        <PricingFaq/>
        <Footer />
      </div>
    </>
  );
};

export default Pricing;
