import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ShoppingCart from '../cart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/userActions';
import { toggleCart } from '../../store/actions/cartActions';

import './Navbar.scss';


const Navbar = () => {

  let totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);
  let isAuth = useSelector(state => state.userReducer.token);
  let isOpen = useSelector(state => state.cartReducer.isOpen);

  const dispatch = useDispatch();

  const toogleBag = () => {
    dispatch(toggleCart())
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">WEBSHOP</Link>
        <ul>
          <li><NavLink exact to="/" activeClassName="link__active">Shop</NavLink></li>
          {
            isAuth && (
              <li><NavLink exact to="/orders" activeClassName="link__active">My orders</NavLink></li>
            )
          }
        </ul>
        <div>
          {

            isAuth ? <a className="link__logout" onClick={() => dispatch(logout())}>Sign out</a>
              : <NavLink exact to="/login" activeClassName="link__active">Sign in</NavLink>

          }
          <button className="btn-cart">
            <i className="fas fa-shopping-bag" onClick={toogleBag}></i>
            <span >({totalCartQuantity})</span>
          </button>
          <div className={`shopping-cart ${isOpen ? 'open' : 'closed'}`}>
            <i className="fas fa-times closebtn" onClick={toogleBag}></i>
            <ShoppingCart toggleBag={toogleBag} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
