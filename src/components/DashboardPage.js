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
                <li className="ui-tabs-active"><Link to="01674539633">01674539633</Link></li>
                <li><Link to="0943392251">0943392251</Link></li>
              </ul>
            </div>
            <div className="col-md-9 content-account-setting">
              <div id="tabs-basic-info">
                <div className="email-adress block-basic">
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
                        <td><span><Link to="/edit/01674539633">Edit</Link></span></td>
                        <td><span><Link to="/delete/01674539633">Delete</Link></span></td>
                        <td></td>
                      </tr>
                      <tr className="">
                        <td><span>tinphim2016@gmail.com</span></td>
                        <td><span><i className="icon-icon-next-short"></i>Primary</span></td>
                        <td><span><Link to="/edit/01674539633">Edit</Link></span></td>
                        <td><span><Link to="/delete/01674539633">Delete</Link></span></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
