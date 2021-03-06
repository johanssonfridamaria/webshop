import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ShoppingCart from '../cart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/userActions';
import './Navbar.scss';

const Navbar = ({ openCart, setOpenCart }) => {

  let totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);
  let isAuth = useSelector(state => state.userReducer.token);

  const [toggleNav, setToggleNav] = useState(false)

  const dispatch = useDispatch();

  const toogleBag = () => {
    setOpenCart(!openCart)
  }

  const toggleNavbar = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">WEBSHOP</Link>
        <ul className={`navbar-nav ${toggleNav ? 'closed' : ''}`}>
          <li><NavLink exact to="/" activeClassName="link__active">Shop</NavLink></li>
          {
            isAuth && (
              <li><NavLink exact to="/orders" activeClassName="link__active">My orders</NavLink></li>
            )
          }
          {
            isAuth ? <li><span onClick={() => dispatch(logout())}>Sign out</span></li>
              : <li><NavLink exact to="/login" activeClassName="link__active">Sign in</NavLink></li>
          }
        </ul>

        <div>
          <button className="btn-cart">
            <i className="fas fa-shopping-bag" onClick={toogleBag}></i>
            <span >({totalCartQuantity})</span>
          </button>
          <div className={`shopping-cart ${openCart ? 'open' : ''}`}>
            <i className="fas fa-times closebtn" onClick={toogleBag}></i>
            <ShoppingCart toggleBag={toogleBag} setOpenCart={setOpenCart} />
          </div>
          <button className="btn-cart toggle-btn" onClick={toggleNavbar}><i className="fas fa-bars"></i></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
