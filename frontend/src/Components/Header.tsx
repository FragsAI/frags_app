import React, { useState } from "react";
import "../Styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { signOut } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  };

  const handleSignIn = () => {
    localStorage.setItem("intendedDestination", location.pathname);
    navigate("/login");
  };

  const handleSignOut = () => {
    signOut(() => navigate("/"));
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="../assets/Frame 50126812.png"
            alt="Frags Logo"
            className="logo-img"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={expanded}
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/product" onClick={closeNavbar}>
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
            <nav>
              {isSignedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="btn btn-outline-primary me-2"
                  >
                    Dashboard
                  </Link>
                  <button onClick={handleSignOut} className="btn btn-danger">
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleSignIn}
                    className="btn btn-outline-primary me-2"
                  >
                    Login
                  </button>
                  <Link to="/signup" className="btn btn-primary" onClick={closeNavbar}>
                    Get Started Free
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;