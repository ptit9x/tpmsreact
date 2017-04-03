import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="teal" role="navigation">
        <div className="navbar-fixed">
          <a id="logo-container" href="#" className="brand-logo">LOGO</a>
          <ul className="main_menu hide-on-med-and-down">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li>
              <a className="avatar">
                <img src="http://materializecss.com/images/yuna.jpg" alt="" className="circle" />
                <span class="title">HuynhDN</span>
              </a>
            </li>
          </ul>

          <ul id="nav-mobile" className="side-nav">
            <li>
              <a className="avatar">
                <img src="http://materializecss.com/images/yuna.jpg" alt="" className="circle" />
                <span class="title">HuynhDN</span>
              </a>
            </li>
            <li className="active"><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
      </nav>
    );
  }
}
