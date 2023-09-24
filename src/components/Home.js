// Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to My React App</h1>
      </header>
      <main className="main-content">
        <section className="feature">
          <h2>Hello</h2>
          <p>This is a continuation of my Spring 2023, Capstone Project</p>
        </section>

      </main>
      <footer className="footer">
        <p>Please see about page for additional details</p>
      </footer>
    </div>
  );
}

export default Home;