
import "./product.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../app/cart/cartaction";
import { addToWishlist } from "../../app/wishlist/wishlistaction";
import { useNavigate, useParams } from "react-router-dom";

import sale1 from "../../assets/images/Frame 611 (1).svg";
import sale2 from "../../assets/images/Frame 612.svg";
import sale3 from "../../assets/images/Frame 613.svg";
import sale4 from "../../assets/images/Frame 614.svg";
import sale5 from "../../assets/images/Frame 605.svg";
import sale6 from "../../assets/images/Frame 606.svg";

import { CiHeart, CiShoppingCart, CiDeliveryTruck } from "react-icons/ci";
import { FaRecycle } from "react-icons/fa";

import "../dashboard/dashboard.css";

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [rating, setRating] = useState(0);
  const [selectedColor, setSelectedColor] = useState("default");
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const { id } = useParams();

  const products = [
    { id: 1, name: "HAVIT HV-G92 Gamepad", price: 120, image: sale1,},
    { id: 2, name: "AK-900 Wired Keyboard", price: 960, image: sale2,description: "Mechanical keyboard with ergonomic design"},
    { id: 3, name: "IPS LCD Gaming Monitor", price: 370, image: sale3,description: "27-inch Full HD monitor with fast refresh rate" },
    { id: 4, name: "FS-Series Comfort Chair", price: 375, image: sale4, description: "Ergonomic chair for comfortable long hours" },
    { id: 5, name: "The north coat", price: 260, image: sale5,description: "Warm and stylish coat for winter"},
    { id: 6, name: "Gucci duffle bag", price: 960, image: sale6,description: "Luxury leather bag with spacious interior." },
  ];

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    if (found) {
      setProduct(found);
      setMainImage(found.image); 
      setQuantity(0);
      setRating(0);
      setSelectedColor("default");
      setIsWishlisted(false);
    }
  }, [id]);

  if (!product) return <p>Product not found!</p>;

  const handleBuyNow = () => {
    if (quantity > 0) {
      dispatch(addToCart({ ...product, quantity })); 
      setQuantity(quantity);
    }
  };

  const renderStars = () =>
    [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        style={{ cursor: "pointer", color: star <= rating ? "#FFD700" : "#ccc" }}
        onClick={() => setRating(star)}
      >
        ★
      </span>
    ));

  return (
    <section>
      <div className="top-headerproduct">
        Summer sale for all swim suits and free express delivery-off 50%!
        <span className="LANGproduct">English</span>
      </div>

      <div className="headerproduct">
        <div className="logoproduct">Exclusive</div>
        <ul className="nav-menuproduct">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </ul>

        <div className="search-box1">
          <input type="text" className="search-input" placeholder="What are you looking for?" />
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
      </div>

      <ul className="Roadmap">
        <li>Account/</li>
        <li>Gaming/</li>
        <li>{product.name}</li>
      </ul>

      <div className="product">
        <div className="product-section">
          
          <div className={`gamepad ${selectedColor}`}>
            <img src={mainImage} alt={product.name} />
          </div>
        </div>

        <div className="containerproduct">
          <h2>{product.name}</h2>
          <p className="sale-price">${product.price}</p>
          <div className="star-rating">{renderStars()}</div>

          <p className="product-description">{product.description}
           PlayStation 5 Controller Skin High quality vinyl with air
            <br />
            channel adhesive for easy bubble free install & mess
            <br />
            free removal Pressure sensitive.
          </p> 
          <hr />

          <h1>Colours</h1>
          <div className="color-buttons">
            <button style={{ backgroundColor: "gray" }} 
            onClick={() => setSelectedColor("default")}>
            </button>
            <button style={{ backgroundColor: "red" }} 
            onClick={() => setSelectedColor("red")}>
            </button>




            <button style={{ backgroundColor: "blue" }} 
            onClick={() => setSelectedColor("blue")}>

            </button>
          </div>

          <div className="buy-section">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)} 
              className="quantityy-button">-</button>
              <span className="quantity-display">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}
               className="quantity-button">+</button>
            </div>

            <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>

            <button className={`wishlist-button ${isWishlisted ? "active" : ""}`} 
            onClick={() => setIsWishlisted(!isWishlisted)}>
              <CiHeart />
            </button>
          </div>

          <div className="delivery-info">
            <div className="Iconsproduct">
              <CiDeliveryTruck className="icon" />
              <h2>Free Delivery</h2>
            </div>
            <p>Enter your postal code for Delivery Availability</p>

            <div className="Iconsproduct">
              <FaRecycle className="icon" />
              <h2>Return Delivery</h2>
            </div>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>

      <div className="Todays">
        <h1>Related Item</h1>
      </div>

      <div className="Saleitem">
        {products.map((item) => (
          <div className="sale-card" key={item.id} onClick={() => navigate(`/product/${item.id}`)}>
            <img src={item.image} alt={item.name} />
            <p className="sale-description">{item.name}</p>
            <p className="sale-price">${item.price}</p>
            <span>⭐⭐⭐⭐☆</span>

            <div className="Icons">
              <CiHeart
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(addToWishlist(item));
                }}
              />
              <CiShoppingCart
                style={{ cursor: "pointer", marginLeft: "10px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch(addToCart({ ...item, quantity: 1 }));
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
