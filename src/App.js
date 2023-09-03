import './App.css';
import Navbar from './components/NavBar'; // Assuming you have created a Navbar component
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutPage from './components/About';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
