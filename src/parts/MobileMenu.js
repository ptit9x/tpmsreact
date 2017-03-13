import React from 'react';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';
import PrimaryMenu from './PrimaryMenu';

export default class MobileMenu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-inverse" id="menu-Onmobile">
        <div className="list-menu-mobile">
          <PrimaryMenu />
        </div>
        <NotAuthenticated>
          <LoginLink id="login-nav-mobile" className="menu-secondary mobile-menu" />
          <Link to="/register" id="register" className="menu-secondary mobile-menu">Register</Link>
        </NotAuthenticated>
        <Authenticated>
          <Link to="/profile" id="profile" className="menu-secondary mobile-menu">Profile</Link>
          <LogoutLink />
        </Authenticated>
      </nav>
    );
  }
}
