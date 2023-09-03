// Home.js
import { useState, useEffect } from 'react';
import FontList from '../FontList';

const Home = () => {
  const[fonts, setFonts] = useState([
    { name: '1234', user: 'new1', date_created: 'annelise', id: 3}
  ]);

  const handleDelete = (id) => {
    const newFonts = fonts.filter(font => font.id !== id);
    setFonts(newFonts);
  }

  useEffect(() => {
    fetch('http://localhost:8000/fonts')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data)
    })
    console.log('use effect ran');
  }, []);

    return (
        <div className="home">
            <h1>HOME COMPONENT Home Page</h1>
           { fonts && <FontList fonts={fonts} title="All Fonts Here" handleDelete={handleDelete} /> }
        </div>
    );
}

export default Home;
