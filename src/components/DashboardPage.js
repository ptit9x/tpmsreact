import React from 'react';
import Header from '../parts/Header';
import { Link } from 'react-router';

export default class DashboardPage extends React.Component {
  render() {
    return (
      <div className="contact-page">
        <Header />
        <div className="title-header-page">
          <h3>Dashboard</h3>
          <span>Get In Touch With Us</span>
        </div>
        <div className="container">
          <div className="lines-page-full"></div>
          <div id="tabs-account-settings" className="container">
            <div className="col-md-3 menu-sidebar-left">
              <ul>
                <li><a href="#tabs-basic-info">Basic info</a></li>
                <li><a href="#tabs-organizations">Proin dolor</a></li>
              </ul>
            </div>
            <div className="col-md-9 content-account-setting">
              <div id="tabs-basic-info">
                <h3 className="title-content">Basic Information</h3>
                <div className="email-adress block-basic">
                  <h3>Email Address</h3>
                  <table className="email-admin-table">
                    <thead>
                      <tr>
                        <td><b>Phone Number</b></td>
                        <td><span><b>MESSAGER</b></span></td>
                        <td><b>Edit</b></td>
                        <td><b>Delete</b></td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="account-primary">
                        <td><span>tinphim2016@gmail.com</span></td>
                        <td><span><i className="icon-icon-next-short"></i>Primary</span></td>
                        <td><span>Edit</span></td>
                        <td><span>Delete</span></td>
                        <td></td>
                      </tr>
                      <tr className="">
                        <td><span>tinphim2016@gmail.com</span></td>
                        <td><span><i className="icon-icon-next-short"></i>Primary</span></td>
                        <td><span>Edit</span></td>
                        <td><span>Delete</span></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="change-password block-basic">
                  <h3>Password</h3>
                </div>
              </div>

              <div id="tabs-organizations">
                <h3 className="title-content">Your Organizations</h3>
                <p>Meteor Developer Organizations are groups of developers that can publish packages to Atmosphere or deploy apps to Galaxy together.</p>
                <div className="change-password block-basic">
                  <h3>You aren't in any organizations yet!</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
