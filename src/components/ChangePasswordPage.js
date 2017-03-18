import React from 'react';
import DocumentTitle from 'react-document-title';
import { ChangePasswordForm } from 'react-stormpath';
import Header from '../parts/Header';

export default class ChangePasswordPage extends React.Component {
  render() {
    let query = this.props.location.query;

    return (
	<div>
        <Header />
        <div className="menu-fixed"></div>
        <div className="header-account-page">
          <h3 className="wow fadeInUp">Change Password</h3>
        </div>
		  <DocumentTitle title={`Change Password`}>
			<div className="container">
			  <div className="row">
				<div className="col-xs-12">
				  <ChangePasswordForm spToken={query.sptoken} />
				</div>
			  </div>
			</div>
		  </DocumentTitle>
	  </div>
    );
  }
}
