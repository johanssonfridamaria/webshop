import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ShoppingCart from '../cart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/authActions';

const Navbar = () => {

  let totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);
  let isAuthenticated = useSelector(state => state.authReducer.isAuthenticated);
  const dispatch = useDispatch();

  const [isOpen, setisOpen] = useState('false');

  const toogleBag = () => {
    setisOpen(!isOpen);

    const move = document.querySelector('#app');
    const nav = document.querySelector('.shopping-cart')
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
          <li><NavLink exact to="/" activeClassName="link-active">Shop</NavLink></li>
          {
            isAuth && <NavLink exact to="/myorders" activeClassName="link-active">My orders</NavLink>
          }
        </ul>
        <ul>
          <li>
            {
              isAuth ? <p onClick={() => dispatch(logout())}>Sign out</p>
                : <NavLink exact to="/login" activeClassName="link-active">Sign in</NavLink>
            }
          </li>
          <li>
            <span className="cart">
              <i className="fas fa-shopping-bag" onClick={toogleBag}></i>
              <span className="quantity">({totalCartQuantity})</span>
            </span>
            <div className='shopping-cart'>
              <i className="fas fa-times closebtn" onClick={toogleBag}></i>
              <ShoppingCart />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
