import React from 'react';
import DocumentTitle from 'react-document-title';

import { ResetPasswordForm } from 'react-stormpath';

export default class ResetPasswordPage extends React.Component {
  render() {
    return (
      <div>
        <div className="menu-fixed"></div>
        <div className="header-account-page">
          <h3 className="wow fadeInUp">Forgot Password</h3>
        </div>
        <DocumentTitle title={`Login`}>
          <div className="container">
            <ResetPasswordForm />
          </div>
        </DocumentTitle>
      </div>
    );
  }
}
