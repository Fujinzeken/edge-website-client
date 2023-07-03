import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import avatar from "../../images/ava-1.jpg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const { user, logout } = useContext(AuthProvider);

  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.pageYOffset === 0 ? false : true);
    };
  }, [scrolled]);
  return (
    <div className={scrolled ? "scrolled" : "navbar"}>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="navbar-toggler">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">EDGE MUSIC ACADEMY</span>
          </Link>
          <div className="search">
            <input type="text" placeholder="Want to learn?" />
            <button>Explore</button>
          </div>
          <Link to="/about" className="link">
            <span className="navbar-nav">About</span>
          </Link>
          <Link to="/courses" className="link">
            <span className="navbar-nav">Courses</span>
          </Link>
          <Link to="/e-learn" className="link">
            <span className="navbar-nav">E-learn</span>
          </Link>
        </div>
        <div className="navbar-right">
          {user ? (
            <div className="user__profile">
              <Link to="/" className="link">
                <button onClick={logout} className="reg-btn">
                  Logout
                </button>
              </Link>
              <img src={avatar} alt="" className="profile__image" />
              <div className="profile">
                <h3>Username</h3>
                <p>Profile</p>
                <p>Settings</p>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="link">
                <span className="navbar-nav">Sign In</span>
              </Link>
              <Link to="/register" className="link">
                <button className="reg-btn">Create free account</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
