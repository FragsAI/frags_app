import React, { useState } from "react";
import "../Styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";
import Dashboard from "./Dashboard/Dashboard";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const { signOut } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  const handleSignOut = () => {
    signOut(() => navigate('/'));
  };

  if (isSignedIn) {
    navigate("/dashboard"); 
    return null; 
  }
  
  return (
    <header className="header navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/">
            <img src="../assets/Frame 50126812.png" alt="Frags Logo" className="logo-img" />
        </a>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={expanded}
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation links */}
        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="product nav-link" href="/product" onClick={closeNavbar}>
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing" onClick={closeNavbar}>
                Pricing
              </a>
            </li>
          </ul>
          <div className="d-flex">
            {/* Login and Sign Up */}
            <nav>
            <button
                className="login btn btn-outline-primary me-2"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <a
                href="/signup"
                className="signup btn"
                onClick={closeNavbar}
              >
                Get Started Free
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
