import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Screens
import HomeScreen from './views/HomeScreen';
import ProductScreen from './views/ProductScreen';
import CartScreen from './views/CartScreen';

//Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
        <main>
          <Switch>
            <Route exact path='/' component={HomeScreen}/> 
            <Route exact path='/product/:id' component={ProductScreen}/> 
            <Route exact path='/cart' component={CartScreen}/> 
          </Switch>
        </main>     
    </Router>
  );
}

export default App;
