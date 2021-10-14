//Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Header from './Components/Header';

//Context
import { CommerceContextProvider } from './Context/CommerceContext';
import { CartContextProvider } from './Context/CartContext';

//Views
import HomePage from './Views/HomePage';
import ShoppingCart from './Views/ShoppingCart';
import Login from './Views/Login';

//Styles
import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <CommerceContextProvider>
      <CartContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shopping-cart" component={ShoppingCart}/>
            <Route exact path="/login" component={Login}/>
            <Route path="*" component={(<h4>Error 404</h4>)}/>
          </Switch>
        </Router>
      </CartContextProvider>
    </CommerceContextProvider>
  );
}

export default App;
