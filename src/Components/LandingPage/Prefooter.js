import React from 'react'
import "../../Styles/LandingPageStyles/prefooter.css"

const Prefooter = () => {
  return (
    <section className="prefooter">
      <div className="prefooter-content">
        <h1>Ready to Get Started</h1>
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