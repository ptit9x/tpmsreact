import React from 'react';
import { Link } from 'react-router';

import { Authenticated } from 'react-stormpath';

export default class PrimaryMenu extends React.Component {
  render() {
    return (
      <nav id="primary-menu">
        <Link id="contact" to="/" className="menu-main">
          <span>Home</span>
        </Link>
        <Authenticated>
          <Link id="dashboard" to="/dashboard" className="menu-main">
            <span>Dashboard</span>
          </Link>
        </Authenticated>
        <Link id="about" to="/about" className="menu-main">
          <span>About Us</span>
        </Link>
        <Link id="contact" to="/contact" className="menu-main">
          <span>Contact</span>
        </Link>
      </nav>
    );
  }
}
