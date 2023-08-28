import './App.css';
import Navbar from './Navbar'; // Assuming you have created a Navbar component
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AboutPage from './components/About';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
