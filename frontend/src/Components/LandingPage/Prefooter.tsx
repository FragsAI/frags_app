import React from 'react'
import "../../Styles/LandingPageStyles/prefooter.css"

const Prefooter: React.FC = () => {
  return (
    <section className="prefooter">
      <div className="prefooter-content">
        <h1><span style={{color: '#fff'}} className="gray1gradiant">120 minutes of free clipping every month</span></h1>
        <p style={{color: '#fff'}}>Create an account or talk to one of our experts.</p>
        <div className="prefooter-buttons">
          <a href="#signup" className="btn btn-signup">Get Started</a>
          <a href="#login" className="btn btn-login">Talk to our expert</a>
        </div>
      </div>
    </section>
  )
}

export default Prefooter;