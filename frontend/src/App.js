import './scss/App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import Login from './views/Login';
import ProductDetails from './views/ProductDetails';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';


function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <div className="my-2 view">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/products/:id" component={ProductDetails} />
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
