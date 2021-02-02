import './scss/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './views/Products';
import Login from './views/Login';
import ProductDetails from './views/ProductDetails';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import Checkout from './views/Checkout';
import MyOrders from './views/MyOrders';
import { UserRoute } from './routes/ProtectedRoute';
import Register from './views/Register';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="my-2 view">
            <Switch>
              <Route exact path="/" component={Products} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/:id" component={ProductDetails} />
              <Route exact path="/checkout" component={Checkout} />
              <UserRoute exact path="/orders" component={MyOrders} />
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
