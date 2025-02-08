import React from 'react'
import "../../Styles/LandingPageStyles/prefooter.css"

const Prefooter: React.FC = () => {
  return (
    <section className="prefooter">
      <div className="prefooter-content">
        <h1><span className="gray1gradiant">120 minutes of</span><span className="orangegradiant"> free clipping</span><span className='gray2gradiant'> every month</span></h1>
        <p>Create an account or talk to one of our experts.</p>
        <div className="prefooter-buttons">
          <a href="#login" className="btn btn-login">LOGIN</a>
          <a href="#signup" className="btn btn-signup">SIGNUP</a>
        </div>
      </div>
    </section>
  )
}

export default Prefooter;