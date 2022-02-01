import React from 'react';
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import logo from '../assets/images/WeirdNJobs.png';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar-item has-dropdown is-hoverable">
              <p className="navbar-link">
                Menu
              </p>
              <div className="navbar-dropdown">
                <Link to='/profile'>
                  <p className="navbar-item">Dashboard</p>
                </Link>
                <Link to='/myorders'>
                  <p className="navbar-item">My Orders</p>
                </Link>
            </div>
        </div>
      )
    } else {
      return ''
    }
  }

  function showLogButton() {
    if (Auth.loggedIn()) {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light" href='/' onClick={() => Auth.logout()}>
                Log Out
              </a>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to='/signup'>
                  <p className="button has-background-info-light"><strong>Sign up</strong></p>
              </Link>
              <Link to='/login'>
                <p className="button is-light">Log in</p>
              </Link>
            </div>
          </div>
        </div>
      )
    }
  }


    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} width="112" height="28" alt='logo'></img>
          </a>

          <a role="button" className="navbar-burger navbar-link navbar-dropdown" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href='#burger'>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" className="navbar-menu ">
          {showNavigation()}
          {showLogButton()}
        </div>
      </nav>
    )
};

export default Nav;