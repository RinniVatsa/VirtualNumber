// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

import './App.css';
import { countriesData } from './countriesData';




const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Animated Header */}
      <header className={`animated-header ${isOpen ? 'open' : ''}`} onClick={toggleNav}>
        <div className="container">
          <h3>Virtual Numbers</h3>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* ... rest of the navigation code */}
      </nav>

      {/* Main Content */}
      <main>
        <div className="container mt-4">
          <div className="row">
            {countriesData.map((country, index) => (
              <div key={index.id} className="col-md-4 mb-4">
                {/* <CountryCard country={country} /> */}
                <div className="card">
      <img src={country.image} className="card-img-top" alt={country.name} />
      <div className="card-body">
        <h5 className="card-title">{country.name}</h5>
        <p className="card-text"> Number: {country.Number}</p>
      </div>
    </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-light p-3 mt-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Virtual Number. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
