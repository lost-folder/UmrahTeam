import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <div className="App">
        <Route path="/" exact={true} >
          <Home />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
       
    </div>
  );
}

export default App;
