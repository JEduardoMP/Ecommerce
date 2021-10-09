//Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Context
import { CommerceContextProvider } from './Context/CommerceContext';
import { CartContextProvider } from './Context/CartContext';

//Styles
import './App.css';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Views/HomePage';

function App() {
  return (
    <CommerceContextProvider>
      <CartContextProvider>
        <Router>
          <Switch>
            <Route path="/" component={HomePage}/>
            <Route path=""/>
            <Route />
            <Route path="*" component={<h4>Error 404</h4>}/>
          </Switch>
        </Router>
      </CartContextProvider>
    </CommerceContextProvider>
  );
}

export default App;
