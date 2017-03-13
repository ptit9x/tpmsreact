import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="developers">
        <div className="container">
          <div className="lines-page-full">
            <div id="alllist-footer">
              <div className="list-footer">
                <img src="https://d14xs1qewsqjcd.cloudfront.net/assets/logo-black.svg" alt="" />
                <span className="des"> © 2017 Meteor Development Group Inc.
                  <br /><br />Open source downloads supported by Ptit9x
                </span>
              </div>
              <div className="list-footer">
                <Link to="/">Home</Link>
                <Link to="/">GitHub</Link>
                <Link to="/">Twitter</Link>
                <Link to="/">Youtube</Link>
                <Link to="/">Facebook</Link>
              </div>
              <div className="list-footer">
                <Link to="/">Developers</Link>
                <Link to="/">Install</Link>
                <Link to="/">Tutorials</Link>
                <Link to="/">Guide</Link>
              </div>
              <div className="list-footer">
                <Link to="/">Solutions</Link>
                <Link to="/">Meteor Hosting</Link>
                <Link to="/">Official Partners</Link>
                <Link to="/">Become a Partner</Link>
              </div>
              <div className="list-footer">
                <Link to="/">Careers</Link>
                <Link to="/">Culture</Link>
                <Link to="/">Press</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
