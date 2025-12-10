
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../app/wishlist/wishlistaction";
import { addToCart } from "../../app/cart/cartaction";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../dashboard/dashboard.css";
import phone from "../../assets/images/Frame 560.svg";
import sale1 from "../../assets/images/Frame 611 (1).svg";
import sale2 from "../../assets/images/Frame 612.svg";
import sale3 from "../../assets/images/Frame 613.svg";
import sale4 from "../../assets/images/Frame 614.svg";
import sale5 from "../../assets/images/Frame 605.svg";
import sale6 from "../../assets/images/Frame 606.svg";
import React, { useState } from "react";
import { CiHeart, CiRead } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import mobile from "../../assets/images/Side Image (1).svg";
import scan from "../../assets/images/Qrcode 1.svg";
import symbol from "../../assets/images/Frame 718.svg";

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { CiInstagram, CiLinkedin } from "react-icons/ci";

export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
const wishlistItems = useSelector((state) => state.wishlist.items);



  const products = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, image: sale1 },
    { id: 2, name: "AK-900 Wired Keyboard", price: 960, image: sale2 },
    { id: 3, name: "IPS LCD Gaming Monitor", price: 370, image: sale3 },
    { id: 4, name: "FS-Series Comfort Chair", price: 375, image: sale4 },
    { id: 5, name: "The north coat", price: 260, image: sale5 },
    { id: 6, name: "Gucci duffle bag", price: 960, image: sale6 }
  ];

  const saleImages = [sale1, sale2, sale3, sale4, sale5, sale6];

  return (

    <section className="home">

      <div className="top-header1">
        Summer sale for all swim suits and free express delivery — 50% OFF!
        <span className="LANG">English</span>
      </div>

     
      <header className="header1">
        <div className="logo1">Exclusive</div>

        <ul className="nav-menu1">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>

        <div className="search-box1">
          <input 
            type="text"
            className="search-input"
            placeholder="What are you looking for?"
          />
        </div>


<div className="icon-container">
  <div className="hicons" onClick={() => navigate("/cart")}>
    <CiShoppingCart />
    {cartItems.length > 0 && <span>{cartItems.length}</span>}
  </div>

  <div className="hicons" onClick={() => navigate("/wishlist")}>
    <CiHeart />
    {wishlistItems.length > 0 && <span>{wishlistItems.length}</span>}
  </div>
</div>


      </header>

      <div className="image1">
        <img className="phone" src={phone} alt="phone" />
      </div>

      <div className="Todays">
        <h1>Flash Sales</h1>
          <div className="Countdown">
  
        
    <span>Days: 03</span> :
    <span>Hours: 23</span> :
    <span>Minutes: 19</span> :
    <span>Seconds: 56</span>
  
</div>
</div>
   

      

      <div className="Saleitem">
  {products.map((item) => (
    <div className="sale-card" key={item.id}>
      <img src={item.image} alt={item.name} />
      <p className="sale-description">{item.name}</p>
      <p className="sale-price">${item.price}</p>
      <span>⭐⭐⭐⭐☆</span>

      <div className="Icons">
        <CiHeart
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(addToWishlist(item))}
        />
        <CiShoppingCart
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={() => dispatch(addToCart(item))}
        />
      </div>
    </div>
  ))}
</div>

     
      <footer className="dashboard-footer">

       
        <div className="exclusive-box1">
          <h3 className="exclusive-title1">Exclusive</h3>
          <p className="subscribe-text1">Subscribe</p>
          <p>Get 10% off your first order</p>
        </div>

      
        <div className="Support1">
          <h3>Support</h3>
          <p>111 Bijoy Sarani, Dhaka, DH1515, Bangladesh</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        
        <div className="Account1">
          <h3>My Account</h3>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        
        <div className="QuickLink1">
          <h3>Quick Links</h3>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        
        <div className="Download1">
          <h3>Download App</h3>
          <p>Save $3 with App — New user only</p>

          <img src={scan} alt="QR code" />
          <img src={symbol} alt="store badges" />

          <div className="icons1">
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







