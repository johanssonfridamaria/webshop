import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink exact to="/" className="logo">WEBSHOP</NavLink>
        <div>
          <NavLink exact to="/" className="nav-link">Home</NavLink>
          <NavLink exact to="/products" className="nav-link">Products</NavLink>
        </div>
        <div>
          <NavLink exact to="/login" className="nav-link">Sign in</NavLink>
          <span className="cart">
            <i class="fas fa-shopping-bag"></i>
            <p>(0)</p>
          </span>
          {/* <NavLink exact to="/myorders">myorders</NavLink> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
