import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import '../App.css'

const Nav = () => {
  return (
    <nav className="nav_border">
      <div className="container">
        <div className="navbar">
          <div className="hamburger" id="hamburger">
            <i className="fa-solid fa-bars" id="line"></i>
            <i className="fa-solid fa-square-xmark" id="cross"></i>
          </div>
          <div className="navbar_main">
            <ul className="nav_links left" id="nav-menuL">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
            </ul>
            <div className="logo">
              <Link to="/"><h4>Moments<br />Construction</h4></Link>
            </div>
            <ul className="nav_links right" id="nav-menuR">
              <li><Link to="/projects">Project</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;