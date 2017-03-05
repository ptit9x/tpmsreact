import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <div>
        <header>
          <div id="meteor_particles">
            <div id="banner-home">
              <div className="content-banner">
                <h6 className="wow bounceInDown">The fastest way to manager</h6>
                <h3 className="wow fadeInDown">your message phone</h3>
                <span className="wow zoomIn"> More Phone is an open source platform for web,
                  <br /> mobile, and desktop.</span>
                <div className="action-banner wow fadeInUp">
                  <NotAuthenticated>
                    <LoginLink className="btn-custom hvr-rectangle-out-bg" />
                    <Link to="/register" className="btn-custom hvr-rectangle-out">Register</Link>
                  </NotAuthenticated>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="content-page">
          <div className="container-home">
            <div className="opensource wow fadeInDown">
              <h5>More Phone integrates with</h5>
              <nav>
                <li id="angular" className="listopensource"></li>
                <li id="react" className="listopensource"></li>
                <li id="mongo" className="listopensource"></li>
                <li id="graphql" className="listopensource"></li>
                <li id="npm" className="listopensource"></li>
                <li id="cordova" className="listopensource"></li>
              </nav>
            </div>
            <div className="lines-page"></div>
            <div id="whymeteor">
              <div className="titleAll">
                <h3>why more phone?</h3>
              </div>
              <div className="container-940">
                <div id="allItems-object">
                  <div id="items-left" className="items-object wow fadeIn">
                    <span className="icon"><i className="icon-icon-less-n"></i></span>
                    <h3>Ship more with less code</h3>
                    <span>thanks to an integrated JavaScript stack that extends from the database to the end user's screen.</span>
                  </div>
                  <div id="items-center" className="items-object wow fadeIn" data-wow-delay=".5s">
                    <span className="icon"><i className="icon-icon-app-n"></i></span>
                    <h3>Build apps for any device</h3>
                    <span>Use the same code whether you’re developing for web, iOS, Android, or desktop. Hot push new features without app store approval or forcing users to download a new native app.</span>
                  </div>
                  <div id="items-right" className="items-object wow fadeIn" data-wow-delay="1s">
                    <span className="icon"><i className="icon-icon-technologies-n"></i></span>
                    <h3>Integrate technologies you already use</h3>
                    <span>Use popular frameworks and tools, right out-of-the-box. Focus on building features instead of wiring disparate components together yourself.</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="animation-builMeteor">
              <div id="builMeteor">
                <div className="titleAll color-white">
                  <h3>Built with more phone</h3>
                </div>
                <div className="media-object">

                  <div className="media-left wow fadeInLeft">
                    <span className="thumbnail-featured"></span>
                  </div>
                  <div className="media-body wow fadeInUp">
                    <h4 className="media-heading">
                      <span>Rocket.Chat</span>
                    </h4>
                    <hr />
                    <Link to="/" className="case-study-link">
                      <i className="icon-icon-next-short"></i><i className="icon-icon-pre-letter"></i>See this Case Study
                    </Link>
                    <div className="content-media">
                      <span>Slack-like clone for group messaging and collaboration</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action hvr-rectangle-out">
                <Link href="/showcase" Link="btn-custom"><i Link="icon-icon-next-short"></i>View More Apps</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
