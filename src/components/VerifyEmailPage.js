import React from 'react';
import DocumentTitle from 'react-document-title';

import { VerifyEmailView } from 'react-stormpath';
import Header from '../parts/Header';

export default class VerifyEmailPage extends React.Component {
  render() {
    var spToken = this.props.location.query.sptoken;
    return (
	  <div>
        <Header />
        <div className="menu-fixed"></div>
        <div className="header-account-page">
          <h3 className="wow fadeInUp">Verify Your Account</h3>
        </div>
		  <DocumentTitle title={`Verify Email`}>
			<div className="container">
			  <div className="row">
				<div className="col-xs-12">
				  <hr />
				</div>
			  </div>
			  <VerifyEmailView spToken={spToken} />
			</div>
		  </DocumentTitle>
	  </div>
    );
  }
}
