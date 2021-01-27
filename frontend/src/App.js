import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Products from './views/Products';
import Login from './views/Login';
import ProductDetails from './views/ProductDetails';


function App() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/products/:id" component={ProductDetails}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
