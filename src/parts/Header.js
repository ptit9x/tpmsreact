import React from 'react';
import HeaderMenu from './HeaderMenu';
import MobileMenu from './MobileMenu';

export default class HeaderIndex extends React.Component {
  render() {
    return (
      <div>
        <div id="header-page-menu" className="header-top-menu">
          <HeaderMenu />
        </div>

        <MobileMenu />
      </div>
    );
  }
}
