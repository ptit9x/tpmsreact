import React from 'react';
import DocumentTitle from 'react-document-title';

import Footer from './parts/Footer';

class App extends React.Component {
  render() {
    return (
      <DocumentTitle title='Stormpath Express + React Example'>
        <div className='App'>
          { this.props.children }
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
