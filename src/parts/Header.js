import React from 'react';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';
import PrimaryMenu from './PrimaryMenu';

export default class HeaderIndex extends React.Component {
  render() {
    return (
      <div>
        <div id="header-page-menu" className="header-top-menu">
          <div className="container-header">
			<div className="logo-company">
			  <Link to="/">
				<img id="logo-meteor-home" src="/logo_fixed.png" alt="" />
			  </Link>
			</div>
			<PrimaryMenu />
			<div className="secondary-nav">
			  <nav>
				<NotAuthenticated>
				  <LoginLink className="menu-secondary" />
				  <Link to="/register" id="register" className="menu-secondary">Register</Link>
				</NotAuthenticated>
				<Authenticated>
				  <Link to="/profile" id="profile" className="menu-secondary">Profile</Link>
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

        <MobileMenu />
      </div>
    );
  }
}
