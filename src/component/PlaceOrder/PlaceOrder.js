import React from "react";
import "./PlaceOrder.css";
import { useNavigate } from "react-router-dom";
function PlaceOrder() {
  const navigate = useNavigate();
  const continueShopping = () => {
    navigate("/");
  };
  
  return (
    <div className="place-order">
      <h2>Congratulations! Your order has been placed.</h2>
      <p>Thank you for shopping with us.</p>
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
  );
}

export default PlaceOrder;
