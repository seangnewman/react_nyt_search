import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () =>
  <nav className="navbar navbar-inverse bg-inverse navbar-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand" id="nytHeader">
          New York Times Article Scraper
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/saved">Saved</Link></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Nav;