import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import ShoppingCart from '../cart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/userActions';

const Navbar = () => {

  let totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);
  let isAuth = useSelector(state => state.userReducer.token);
  let isOpen = useSelector(state => state.cartReducer.isOpen);

  const dispatch = useDispatch();


  const toogleBag = () => {
    isOpen = !isOpen
    // openCart(isOpen)

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
        <Link to="/" className="logo">WEBSHOP</Link>
        <ul>
          <li><NavLink exact to="/" activeClassName="link__active">Shop</NavLink></li>
          {
            isAuth && (
              <li><NavLink exact to="/orders" activeClassName="link__active">My orders</NavLink></li>
            )
          }
        </ul>
        <ul>
          {

            isAuth ? <li><span className="link__logout" onClick={() => dispatch(logout())}>Sign out</span></li>
              : <li><NavLink exact to="/login" activeClassName="link__active">Sign in</NavLink></li>

          }
          <li>
            <span className="cart">
              <i className="fas fa-shopping-bag" onClick={toogleBag}></i>
              <span className="quantity">({totalCartQuantity})</span>
            </span>
            <div className='shopping-cart'>
              <i className="fas fa-times closebtn" onClick={toogleBag}></i>
              <ShoppingCart toggleBag={toogleBag} />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
