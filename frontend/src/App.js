import './scss/App.scss'
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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store/actions/userActions';
import OrderConfirm from './views/OrderConfirm';

function App() {

  const loading = useSelector(state => state.userReducer.loading);
  const user = useSelector(state => state.userReducer.token)
  const products = useSelector(state => state.productsReducer.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser())
  }, [dispatch])

  return (
    <div id="app">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="my-2 view">
            {
              loading && <p>loading...</p>
            }
            {
              !loading && (
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/checkout" component={ShopCheckout} />
                  <UserRoute exact path="/orders" component={MyOrders} />
                  <UserRoute exact path="/orders/:id" component={OrderDetails} />
                  <Route exact path="/:id" component={ProductDetails} />
                  <Route exact path="/" component={Products} />
                  <Route exact path="/confirmorder" component={OrderConfirm} />
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
