import React from 'react';
import logo from '../assets/images/WeirdNJobs.png';

function Nav() {
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
          <div className="navbar-start">
            <a className="navbar-item" href='#burger'>
              Home
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href='#burger'>
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href='#burger'>
                  About
                </a>
                <a className="navbar-item" href='#burger'>
                  Jobs
                </a>
                <a className="navbar-item" href='#burger'>
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button has-background-info-light" href='/signup'>
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light" href='/login'>
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
};

export default Nav;