import React from 'react'
import "../Styles/footer.css"

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="footer-div">
          <h3>COMPANY</h3>
          <p >About Us</p>
          <p>Careers</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-div">
        <h3>PRODUCTS</h3>
          <p>Tools</p>
          <p>Product changelog</p>
          <p>Feature Request</p>
          <p>Frags Captions</p>
          <p>How does Frags work</p> 
        </div>
        <div className="footer-div">
        <h3>RESOURCES</h3>
          <p>Customer stories</p>
          <p>Blogs</p>
          <p>Become an affiliate</p>
          <p>Frags media assets</p>
        </div>
        <div className="footer-div">
        <h3>SUPPORT</h3>
          <p>Help Center</p>
          <p>Customer Support</p>
          <p>2025 Ultimate Guide</p>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="left-footer">
          <p>&copy; Fraggs</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Security</p>
          <p>Cookies</p>
          <p>Accessibility</p>
        </div>
        <div className="social-media">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/a.png" alt="GitHub" className="social-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/5e832e1250d1d512f628fd19_twitter-light.svg.png" alt="Twitter" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/5e832e1250d1d5ff3528fd17_linkedin-light.svg.png" alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/5e832e1250d1d559ef28fd10_facebook-light.svg.png" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="../assets/a (1).png" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;