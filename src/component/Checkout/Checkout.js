import React, { useState } from "react";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/placeOrder");
  };

  return (
    <div className="checkout-form">
      <h2>Checkout Form</h2>
      <form class="row g-4 form-row" onSubmit={handleSubmit}>
        <div class="col-md-4">
          <label for="validationDefault01" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            name="name"
            value={shippingInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div class="col-md-6">
          <label for="validationDefault03" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            name="address"
            value={shippingInfo.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div class="col-md-4">
          <label for="validationDefault03" class="form-label">
            City
          </label>
          <input
            type="text"
            class="form-control"
            name="city"
            value={shippingInfo.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div class="col-md-3">
          <label for="validationDefault05" class="form-label">
            Zip Code
          </label>
          <input
            type="text"
            class="form-control"
            name="zip"
            value={shippingInfo.zip}
            onChange={handleInputChange}
            required
          />
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
