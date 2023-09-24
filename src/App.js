import './App.css';
import Navbar from './components/NavBar'; // Assuming you have created a Navbar component
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutPage from './components/About';
import Home from './components/Home';
import Create from './components/Create';
import Fonts from './components/Fonts';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/create" element={<Create />} />
            <Route path="/MyFonts" element={<Fonts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
