import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../cart/ShoppingCart';

const Navbar = () => {

  const [isOpen, setisOpen] = useState('false')

  const toogleBag = () => {
    setisOpen(!isOpen);

    const move = document.querySelector('#app');
    const nav = document.querySelector('.shopping-cart')
    console.log(move)
    if (isOpen) {
      nav.style.width = `${15}rem`
      move.style.marginRight = `${15}rem`
    } else {
      move.style.marginRight = `${0}rem`
      nav.style.width = `${0}rem`
    }
  }


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
          <li>
            <span className="cart">
              <i className="fas fa-shopping-bag" onClick={toogleBag}></i>
              <span className="quantity">(0)</span>
            </span>
            <div className='shopping-cart'>
              <ShoppingCart />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
