import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink exact to="/" className="logo">WEBSHOP</NavLink>
        <ul>
          <li><NavLink exact to="/" activeClassName="link-active">Home</NavLink></li>
          <li><NavLink exact to="/products" activeClassName="link-active">Products</NavLink></li>
          {/* <NavLink exact to="/myorders">myorders</NavLink> */}
        </ul>
        <ul>
          <li><NavLink exact to="/login" activeClassName="link-active">Sign in</NavLink></li>
          <li><span className="cart">
            <i className="fas fa-shopping-bag"></i>
            <span className="quantity">(0)</span>
          </span>
          <div className="shopping-cart-side">
            Cart component here
          </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
