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

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="my-2 view">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/checkout" component={ShopCheckout} />
              <UserRoute exact path="/orders" component={MyOrders} />
              <Route exact path="/:id" component={ProductDetails} />
              <Route exact path="/" component={Products} />
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
