import React from 'react';
import Header from '../parts/Header';
import { Link } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class DashboardPage extends React.Component {
  handleSelect(index, last) {
    console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }
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
				<Tabs onSelect={this.handleSelect} selectedIndex={0}>
				  <TabList>
					  <Tab>Messager</Tab>
					  <Tab>Voice</Tab>
				  </TabList>
				  <TabPanel>
					<div className="panel">
						<div className="panel-heading"></div>
						<div className="panel-body">
						  <ul className="chat" id="chatbox">
							<li className="right clearfix">
							  <span className="chat-img pull-right">
								<img src="http://placehold.it/50/FA6F57/fff&amp;text=ME" alt="User Avatar" className="img-circle" />
							  </span>
							  <div className="chat-body clearfix">
								<div className="header">
								  <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>13 mins ago</small>
								  <strong className="pull-right primary-font">Bhaumik Patel</strong>
								</div>
								<p>
								  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
								</p>
							  </div>
							</li>

							<li className="left clearfix">
							  <span className="chat-img pull-left">
									<img src="http://placehold.it/50/55C1E7/fff&amp;text=U" alt="User Avatar" className="img-circle" />
							</span>
							  <div className="chat-body clearfix">
								<div className="header">
								  <strong className="primary-font">Jack Sparrow</strong>
								  <small className="pull-right text-muted">
								<span className="glyphicon glyphicon-time"></span>12 mins ago</small>
								</div>
								<p>
								  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
								</p>
							  </div>
							</li>
						  </ul>
						</div>
						<div className="panel-footer">
							<div className="input-group">
							  <input id="btn-input" name="txtInput" type="text" className="form-control input-sm" placeholder="Type your message here..." />
							  <span className="input-group-btn">
								  <button className="btn btn-warning btn-sm" id="btn-chat">Send</button>
							  </span>
							</div>
						</div>
					  </div>
				  </TabPanel>
				  <TabPanel>
					<div id="tabs-basic-info" className="panel">
						<div className="email-adress block-basic">
						  <table className="email-admin-table">
							<thead>
							</thead>
							<tbody>
							  <tr className="account-primary">
								<td><span>I love Money</span></td>
								<td><span><Link to="/edit/01674539633">Edit</Link></span></td>
								<td><span><Link to="/delete/01674539633">Delete</Link></span></td>
								<td></td>
							  </tr>
							  <tr className="">
								<td><span>Hello, how are you</span></td>
								<td><span><Link to="/edit/01674539633">Edit</Link></span></td>
								<td><span><Link to="/delete/01674539633">Delete</Link></span></td>
								<td></td>
							  </tr>
							</tbody>
						  </table>
						</div>
					</div>
				  </TabPanel>
				</Tabs>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
