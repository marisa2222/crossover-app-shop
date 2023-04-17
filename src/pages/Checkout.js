import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import cartContext from "../context/cartContext";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, clearCart, toggleCart } = useContext(cartContext);

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const goHome = () => {
    clearCart();
    toggleCart(false);
    navigate("/");
  };
  return (
    <div>
      <div>
        <div className="cart_head">
          <h2>Summary of Orders</h2>
        </div>

        <div className="cart_body">
          {cartQuantity === 0 ? (
            <h2>Cart is empty</h2>
          ) : (
            cartItems.map((item) => {
              const { id, img, title, price, quantity } = item;
              const itemTotal = price * quantity;

              return (
                <div className="cart_items" key={id}>
                  <figure className="cart_items_img">
                    <img src={img} alt="product-img" />
                  </figure>

                  <div className="cart_items_info">
                    <h4>{title}</h4>
                    <h3 className="price">₹ {itemTotal.toLocaleString()}</h3>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <div className="cart_foot">
          <h3>
            <small>Total:</small>
            <b>₹ {cartTotal.toLocaleString()}</b>
          </h3>

          <button
            type="button"
            className="checkout_btn"
            onClick={() => goHome()}
            disabled={cartQuantity === 0}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
