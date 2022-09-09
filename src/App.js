import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';
import Wishlist from './components/wishlist';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/Wishlist">
          <Wishlist/>
          </Route>

        </Switch>
      
      </Router>

   
    </div>
  );
}

export default App;
