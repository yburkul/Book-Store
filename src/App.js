import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookDetails from "./component/BookDetails/BookDetails";
import ShoppingCart from "./component/ShoppingCart/ShoppingCart";
import Checkout from "./component/Checkout/Checkout";
import Header from "./component/Header/header";
import Books from "./component/Books/Books";
import PlaceOrder from "./component/PlaceOrder/PlaceOrder";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Books />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
