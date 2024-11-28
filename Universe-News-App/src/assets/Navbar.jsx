import React, { Component,useEffect } from 'react'
import PropTypes from 'prop-types'
import {Outlet, Link, useLocation  } from "react-router-dom";
const Navbar=(props)=> {
  let location = useLocation();
  useEffect(() => {
      console.log(location.pathname);
    }, [location]);
  
  return (
    <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark " style={{backgroundColor:"#042743"}} >
          
          <div className="container-fluid">
            <Link className="navbar-brand" to="">UN</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/business"? "active": ""}`} to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/entertainment"? "active": ""}`} to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/general"? "active": ""}`} to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/health"? "active": ""}`} to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/science"? "active": ""}`} to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/sports"? "active": ""}`} to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname==="/technology"? "active": ""}`} to="/technology">Technology</Link>
                </li>
                <li className="nav-item dropdown mx-5">
                  <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country-{props.country}
                  </a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to={`${location.pathname==="/"? "business": "/"}`} onClick={props.handleinClick}>India</Link></li>
                      <li><Link className="dropdown-item" to={`${location.pathname==="/"? "business": "/"}`} onClick={props.handleruClick}>Russia</Link></li>
                      <li><Link className="dropdown-item" to={`${location.pathname==="/"? "business": "/"}`} onClick={props.handleusClick}>USA</Link></li>
                      <li><Link className="dropdown-item" to={`${location.pathname==="/"? "business": "/"}`} onClick={props.handlechClick}>China</Link></li>
                      <li><Link className="dropdown-item" to={`${location.pathname==="/"? "business": "/"}`} onClick={props.handlegbClick}>UK</Link></li>
                      <li><Link className="dropdown-item" to={`${location.pathname==="/"? "business": "/"}`} onClick={props.handledeClick}>Germany</Link></li>
                      <li><Link className="dropdown-item" to={`${location.pathname==="/"? "business": "/"}`} onClick={props.handlefrClick}>France</Link></li>
                      <li><Link className="dropdown-item" to={`${location.pathname==="/"? "business": "/"}`} onClick={props.handleauClick}>Australia</Link></li>
                    </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet/>
      </div>
    )
  }


export default Navbar





