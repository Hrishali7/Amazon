import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../app/wishlist/wishlistaction";
import { addToCart } from "../../app/cart/cartaction";

const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div>
          <ul>
            {wishlistItems.map((item) => (
              <li key={item.id}>
                {item.name} - ₹{item.price}{" "}
                <button onClick={() => dispatch(removeFromWishlist(item.id))}>
                  Remove
                </button>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
                  </button>

              </li>
            ))}
          </ul>

          <button onClick={() => dispatch({ type: "CLEAR_WISHLIST" })}>
            Clear Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Wishlist;