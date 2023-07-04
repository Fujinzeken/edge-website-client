import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import avatar from "../../images/ava-1.jpg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showDorpdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const { logout } = useContext(AuthProvider);
  const user = localStorage.getItem("user");
  useEffect(() => {
    window.onscroll = () => {
      setScrolled(window.pageYOffset === 0 ? false : true);
    };
  }, [scrolled]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
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
              <button onClick={handleLogout} className="reg-btn">
                Logout
              </button>

              <div onMouseEnter={() => setShowDropdown(true)}>
                <img src={avatar} alt="" className="profile__image" />
                <span>Username</span>
              </div>
              <div
                className={showDorpdown ? "profile" : "no__profile"}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <div className="profile__dropdown user__info">
                  <img
                    src={avatar}
                    alt=""
                    className="w-25 rounded-circle m-2"
                  />
                  <span>Username</span>
                </div>

                <div className="profile__dropdown options ">
                  <span>My learning</span>
                  <span>Cart</span>
                  <span>Wishlist</span>
                  <span>Become an instructor</span>
                </div>

                <div className="profile__dropdown options ">
                  <span>Notifications</span>
                  <span>Messages</span>
                </div>

                <div className="profile__dropdown options ">
                  <span>Settings</span>
                  <span>Payment Info</span>
                </div>
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
