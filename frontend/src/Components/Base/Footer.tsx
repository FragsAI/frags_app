import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="container text-white font-inter">
      <div className="grid grid-cols-2 lg:grid-cols-5">
        <div className="flex flex-col gap-4">
          <div className="font-bold text-xl">COMPANY</div>
          <div className="font-bold text-gray-400 flex flex-col gap-4">
            <div>About Us</div>
            <div>Careers</div>
            <div>Contact Us</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-xl">PRODUCTS</div>
          <div className="font-bold text-gray-400 flex flex-col gap-4">
            <div>Tools</div>
            <div>Product Changelog</div>
            <div>Feature Request</div>
            <div>Frags Captions</div>
            <div>How does Frags work</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-xl">RESOURCES</div>
          <div className="font-bold text-gray-400 flex flex-col gap-4">
            <div>Customer Stories</div>
            <div>Blogs</div>
            <div>Become an Affiliate</div>
            <div>Frags Media Assets</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-xl">SUPPORT</div>
          <div className="font-bold text-gray-400 flex flex-col gap-4">
            <div>Help Center</div>
            <div>Customer Support</div>
            <div>2025 Ultimate Guide</div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold text-xl">LEGAL</div>
          <div className="font-bold text-gray-400 flex flex-col gap-4">
            <div>Terms and Conditions</div>
            <div>Privacy Policy</div>
            <div>Cookie Preferences</div>
            <div>Accessbility Statement</div>
            <div>Trust Center</div>
          </div>
        </div>
      </div>
      <div className="my-8 w-full border-b border-gray-400 border-2"></div>
      <div className="flex justify-between w-full">
        <div className="font-bold">
          <p>&copy; {currentYear} Frags AI by Frags Inc. All rights reserved.</p>
        </div>
        <div className="flex gap-3">
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