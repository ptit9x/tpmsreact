import React from 'react';
import Header from '../parts/Header';
import {Link} from 'react-router';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <Header />
        <div className="title-header-page">
          <h3>Contact</h3>
          <span>Get In Touch With Us</span>
        </div>
        <div className="container">
          <div className="lines-page-full"></div>
        </div>
        <div className="content-contact-page container">
          <div className="header-contact container-940">
            <div className="items-list-contact">
              <img src="/assets/icon-contact.png" />
              <h3>Visiting Our Offices </h3>
              <span>
                <strong>Meteor Development Group</strong> is located in the
                <strong>South of Market</strong> district of
                <strong>San Francisco</strong>, near the corner of
                <strong>10th Street</strong> and
                <strong> Mission Street</strong>. It's a 10 minute walk from
                <strong>Civic Center BART</strong>. Metered street parking is typically available. The nearest parking garage is a 10 minute walk away at
                <strong>255 12th Street</strong>.
              </span>
              <Link id="get-direction" className="btnm btnm-bg btnm-none hvr-rectangle-out" to="#">Get DIRECTIONS</Link>
            </div>
            <div className="items-list-contact">
              <img src="/assets/icon-mail-address.png" width="60" />
              <h3>mailing address</h3>
              <span>
                Meteor Development Group
                <br /> 140 10th Street
                <br /> San Francisco, CA 94103
              </span>
            </div>
          </div>
          <div id="map-contact">
            <img src="assets/map-contact.png" width="60" />
            </div>
          </div>
      </div>
    );
  }
}
