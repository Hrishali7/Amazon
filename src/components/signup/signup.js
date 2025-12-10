import { useState,useEffect } from "react";
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
import { signupReset, signupUser } from "../../app/signup/signupaction";
import { loginUser } from "../../app/login/loginaction";
import { SIGNUP_RESET } from "../../app/signup/signupactiontypes";


import "../login/login.css";
import mobile from '../../assets/images/Side Image (1).svg';
import scan from '../../assets/images/Qrcode 1.svg';
import symbol from '../../assets/images/Frame 718.svg';


import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const[name, setName]= useState("");
    const[password,setPassword] = useState("");
    const[email,setEmailPhone] = useState("");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const { loading, error, userInfo } = useSelector((state) => state.signup);


const handleSignup = () => {

 
  if (!passwordRegex.test(password)) {
    alert("Password format invalid!");
    return;
  }


  const userData = {
    name,
    email,
    password,
  };


  localStorage.setItem("ecomUser", JSON.stringify(userData));

  dispatch(signupUser(userData));
  navigate('/login')

};

  const gotoLogin = () =>
  {
    navigate('/login');
  }
 

return(
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
    
    <div className="signup-container">
      <h2 className="signup-title">Create Account</h2>

       {error && <p className="signup-error">{error}</p>}
       {userInfo && <p className="signup-success">Signup successful!</p>}
       {loading && <p className="signup-loading">Submitting...</p>}


      <input
        type="text"
        placeholder="Name"
        className="signup-input name-input"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Email or Phone number"
        className="signup-input "
        onChange={(e) => setEmailPhone(e.target.value)}
      />

      <input
  type="password"
  placeholder="Enter password "
  className="signup-input password-input"
  onChange={(e) => setPassword(e.target.value)}
/>



      <button onClick={handleSignup} className="signup-button">Create Account</button>
      {password && !passwordRegex.test(password) && (
  <p className="password-info">
    Password must be at least 8 characters and include uppercase, lowercase,
    number, and special character.
  </p>
)}

      <p className="signup-login-text">
       Already have an account? <a onClick={gotoLogin}>Log In</a>
       </p>
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

export default Signup;




