// Home.js
import { useState, useEffect } from 'react';
import FontList from '../FontList';

const Home = () => {
  const[fonts, setFonts] = useState([
    { name: 'My Font 1', user: 'Annelise', date_created: '09/01/23', id: 3}
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
            <h2>Your created fonts:</h2>
           { fonts && <FontList fonts={fonts} title="AllFonts" handleDelete={handleDelete} /> }
        </div>
    );
}

export default Home;
