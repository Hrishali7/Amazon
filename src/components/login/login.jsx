

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../app/login/loginaction";


import "./login.css";
import mobile from '../../assets/images/Side Image (1).svg';
import scan from '../../assets/images/Qrcode 1.svg';
import symbol from '../../assets/images/Frame 718.svg';

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, error } = useSelector((state) => state.auth);

  
  const handleSubmit = (e) => {
  e.preventDefault();


  const savedUser = JSON.parse(localStorage.getItem("ecomUser"));

  if (!savedUser) {
    alert("No user found! Please signup first.");
    return;
  }

  if (username !== savedUser.name) {
    alert("Email does not exist!");
    return;
  }

  if (password !== savedUser.password) {
    alert("Incorrect password!");
    return;
  }

  dispatch(loginUser({ username, password }));

  alert("Login Successful!");
  navigate("/dashboard"); 
};

  return (
    <section>

      <div className="top-header">
        Summer sale for all swim suits and free express delivery-off 50%!  
        <span className="LANG">English</span>
      </div>

      <div className="header">
        <div className="logo">Exclusive</div>

        <ul className="nav-menu">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>

        <div className="search-box">
          <input type="text" className="search-input" placeholder="What are you looking for?" />
        </div>
      </div>

      <div className="container">

        <div className="image">
          <img className="mobile" src={mobile} alt="" />
        </div>

        <div className="login">
          <h2>Login to Exclusive</h2>
          <h4>Enter your details</h4>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Enter your username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="loginbutton" type="submit">
              {loading ? "Loading..." : "Login"}
            </button>



            <div className="forgot-wrapper">
  <button
    type="button"
    className="forgot-btn"
    
  >
    Forgot Password?
  </button>
</div>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </div>
      </div>

      <footer className="homeFooter">
        <div className="exclusive-box">
          <h3 className="exclusive-title">Exclusive</h3>
          <p className="subscribe-text">Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" className="footer-input" />
        </div>

        <div className="Support">
          <h3>Support</h3>
          <p>111 Biyoy Sarani, Dhaka, DH1515, Bangladesh.</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="Account">
          <h3>My Account</h3>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="QuickLink">
          <h3>Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="Download">
          <h3>Download App</h3>
          <p>Save $3 with App — New user only</p>
          <img src={scan} alt="" />
          <img src={symbol} alt="" />
          <div className="icons">
            <FaFacebookF />
            <FaTwitter />
            <CiInstagram />
            <CiLinkedin />
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Login;


