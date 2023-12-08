import React from "react";
import './header.css'
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../redux/redux";
function Header() {
    const cart = useSelector((state) => state.cart.cartItems);
    console.log(cart,"cart")
    const dispatch = useDispatch()
    const searchTerm = useSelector((state) => state.cart.searchTerm);

    const handleSearchChange = (event) => {
      dispatch(setSearchTerm(event.target.value));
    };
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Book Store</a>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>
          <a class="navbar-brand" href="/cart">Cart ({cart.length})</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
