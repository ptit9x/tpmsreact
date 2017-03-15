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
          <div className="titleAll">
            <h3>MORE PHONE DEVELOPER SUPPORT</h3>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <div className="image">
                <img className="pricing-rocket wow fadeInUp" src="https://d14xs1qewsqjcd.cloudfront.net/assets/package-subscription.svg" alt="" />
              </div>
            </div>
            <div className="col-md-8 col-sm-8 wow fadeInRight">
              <div className="content">
                <p>More Phone is a paid program to help you get started with building Meteor apps
                  the right way, ensuring you're using best architectural practices throughout your project.
                  Once in the program, you can ask specific questions on topics such as security, testing,
                  and performance so you can take your project from concept into production more quickly.
                  If you are looking for application development services, please work directly with an
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
