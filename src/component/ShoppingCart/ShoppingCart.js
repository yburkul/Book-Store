import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./ShoppingCart.css";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/redux";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBuyNow = () => {
    navigate("/checkout");
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const continueShopping = () => {
    navigate("/");
  };
  const getTotalPrice = () => {
    const total = cart.reduce(
      (total, item) => total + (item.saleInfo.retailPrice?.amount || 0),
      0
    );
    return total.toFixed(1);
  };
  return (
    <>
      {cart.length === 0 ? (
        <div className="noCard">
          <h1>Your Card is Empty</h1>
          <h4>There are no items in your cart</h4>
          <div className="shoppingButton">
            <button
              type="button"
              class="btn btn-primary"
              onClick={continueShopping}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="shopping-main-box">
          <div className="shopping-box">
            {cart.map((item) => (
              <div key={item.id} className="book-cart">
                <img
                  src={item.volumeInfo.imageLinks.thumbnail}
                  alt={item.volumeInfo.title}
                  width="80px"
                  height="90px"
                />
                <div className="card-info">
                  <h6>Book Name:- {item.volumeInfo.title}</h6>
                  <p>Price:- ${item.saleInfo.retailPrice?.amount}</p>
                </div>
                <button onClick={() => handleRemoveFromCart(item)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="total-price">
            <p>Total Price: ${getTotalPrice()}</p>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleBuyNow}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
