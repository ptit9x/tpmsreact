import React from 'react';
import Header from '../parts/Header';

export default class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <Header />
        <div className="title-header-page">
          <h3>About</h3>
          <span>Get In Touch With Us</span>
        </div>
        <div className="container">
          <div className="lines-page-full"></div>
        </div>
      </div>
    );
  }
}
