import './scss/App.scss';
import './scss/Section.scss';
import './components/cart/Cart.scss';
import './components/navigation/Footer.scss';
import './components/orders/MyOrders.scss'
import './components/products/Products.scss'
import './components/orders/Orders.scss';
import './components/user/Forms.scss';
import './components/spinner/Spinner.scss';
import './views/OrderConfirm.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import { UserRoute } from './routes/ProtectedRoute';
import Login from './views/Login';
import Register from './views/Register';
import MyOrders from './views/MyOrders';
import ProductDetails from './views/ProductDetails';
import Products from './views/Products';
import Footer from './components/navigation/Footer';
import ShopCheckout from './views/ShopCheckout';
import OrderDetails from './views/OrderDetails';
import OrderConfirm from './views/OrderConfirm';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/actions/userActions';
import Spinner from './components/spinner/Spinner';

function App() {

  const loading = useSelector(state => state.userReducer.loading);
  const dispatch = useDispatch();
  const [openCart, setOpenCart] = useState(false)


  useEffect(() => {
    dispatch(setUser())
  }, [dispatch])

  return (
    <div id="app" className={`${openCart ? 'increase' : ''}`}>
      <BrowserRouter>
        <Navbar openCart={openCart} setOpenCart={setOpenCart} />
        <div className="container">
          <div className="my-2 view">
            {
              loading && <Spinner />
            }
            {
              !loading && (
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/checkout" component={ShopCheckout} />
                  <Route exact path="/confirmorder" component={OrderConfirm} />
                  <UserRoute exact path="/orders" component={MyOrders} />
                  <UserRoute exact path="/orders/:id" component={OrderDetails} />
                  <Route exact path="/:id" component={ProductDetails} />
                  <Route exact path="/" render={() => <Products openCart={openCart} setOpenCart={setOpenCart} />} />
                </Switch>
              )
            }
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
