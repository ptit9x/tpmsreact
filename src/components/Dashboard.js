import {Link} from 'react-router';
import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return (
        <div className="dashboard row">
          <div className="col l3 m3 s6">
            <ul className="table-of-contents">
              <li><a href="#" className="active">Download</a></li>
              <li><a href="#">Setup</a></li>
              <li><a href="#">Templates</a></li>
              <li><a href="#">Third-party Options</a></li>
              <li><a href="#">Sass</a></li>
            </ul>
          </div>
          <div className="col l3 m3 s6">
            <div className="row">
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab col s6"><a href="#test1">Messager</a></li>
                  <li className="tab col s6"><a className="active" href="#test2">Voice</a></li>
                </ul>
                <a className="btn-floating">
                  <i className="material-icons">add</i>
                </a>
                Buy a phone
              </div>
              <div id="test1" className="col s12">Test 1</div>
              <div id="test2" className="col s12">Test 2</div>
            </div>
          </div>
          <div className="col l6 m6 s12">
            chat area
          </div>
        </div>
    );
  }
}
