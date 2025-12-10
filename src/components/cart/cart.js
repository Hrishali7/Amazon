import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart, clearCart } from "../../app/cart/cartaction";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const updateQuantity = (item, quantity) => {
    dispatch(addToCart({ ...item, quantity: Number(quantity) }));
  };

  return (
    <div className="cart-page-container">
      <h2 className="cart-title">My Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ):
      
      
      (
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="product-column">
                    <button
                      className="remove-button"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      ×
                    </button>
                    <img src={item.image} alt={item.name} className="cart-img" />
                    <span>{item.name}</span>
                  </td>
                  <td>₹{item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item, e.target.value)}
                      className="quantity-input"
                    />
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-total-box">
            <h3>Cart Total</h3>
            <p>
              <strong>Subtotal:</strong> ₹{totalPrice}
            </p>
            <button
              className="button-red"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
