import React from 'react';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <div id="header-page-menu" className="header-top-menu">
          <div className="container-header wow fadeInUp animated">
            <div className="logo-company">
              <Link to="/">
                <img id="logo-meteor-home" src="https://d14xs1qewsqjcd.cloudfront.net/assets/logo.svg" />
              </Link>
            </div>
            <nav id="primary-menu">
              <Link id="developers" to="/developers" className="menu-main has-sub-menu">
                <span>Developers check</span>
                <ul className="sub-menu-secondary">
                  <li><Link className="menu-child" to="/install">Install</Link></li>
                  <li><Link className="menu-child" to="/tutorials">Tutorials</Link></li>
                </ul>
              </Link>
              <Link id="contact" to="/contact" className="menu-main">
                <span>Contact Us</span>
              </Link>
            </nav>
            <div className="secondary-nav">
              <nav>
                <NotAuthenticated>
                  <LoginLink className="menu-secondary" />
                  <Link to="/register" id="login" className="menu-secondary">Register</Link>
                </NotAuthenticated>
                <Authenticated>
                  <Link to="/profile" id="register" className="menu-secondary">Profile</Link>
                  <LogoutLink />
                </Authenticated>
              </nav>
            </div>
            <div>
              <button type="button" className="icon-custom-menu is-closed">
                <span className="icon-top"></span>
                <span className="icon-middle"></span>
                <span className="icon-bottom"></span>
              </button>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-inverse" id="menu-Onmobile">
          <div className="list-menu-mobile">
            <nav id="primary-menu">
              <Link id="developers" to="/developers" className="menu-main has-sub-menu">
                <span>Developers check</span>
                <ul className="sub-menu-secondary">
                  <li><Link className="menu-child" to="/install">Install</Link></li>
                  <li><Link className="menu-child" to="/tutorials">Tutorials</Link></li>
                </ul>
              </Link>
              <Link id="contact" to="/contact" className="menu-main">
                <span>Contact</span>
              </Link>
            </nav>
          </div>
          <Link id="login-nav-mobile" to="/sign-in" className="menu-secondary mobile-menu">Login</Link>
          <Link id="register" to="/sign-up" className="menu-secondary mobile-menu">Register</Link>
        </nav>
      </div>
    );
  }
}
