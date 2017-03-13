const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const ora = require('ora');
const path = require('path');
const stormpath = require('express-stormpath');
const webpack = require('webpack');

const config = require('./webpack.config');

const port = process.env.PORT || 3000;

const app = express();
const compiler = webpack(config);

const spinner = ora({
  interval: 100
});

function failAndExit(err) {
  spinner.fail();
  console.error(err.stack);
  process.exit(1);
}

app.use(morgan('combined'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use('/', express.static(__dirname + '/public/'));

app.use(stormpath.init(app, {
  // Disable logging until startup, so that we can catch errors
  // and display them nicely.
  debug: 'none',
  web: {

    // The produces option disables the default HTML views, which
    // we want for our single-page react app.

    produces: ['application/json'],
    me: {
      expand: {
        customData: true
      }
    },
    register: {
      form: {
        fields: {
          color: {
            enabled: true,
            label: 'Color',
            placeholder: 'E.g. blue',
            type: 'text'
          }
        }
      }
    }
  }
}));

app.post('/me', stormpath.authenticationRequired, bodyParser.json(), function (req, res) {
  function writeError(message) {
    res.status(400);
    res.json({ message: message, status: 400 });
    res.end();
  }

  function saveAccount() {
    req.user.givenName = req.body.givenName;
    req.user.surname = req.body.surname;
    req.user.email = req.body.email;

    if ('color' in req.body.customData) {
      req.user.customData.color = req.body.customData.color;
    }

    req.user.save(function (err) {
      if (err) {
        return writeError(err.userMessage || err.message);
      }
      res.end();
    });
  }

  if (req.body.password) {
    const application = req.app.get('stormpathApplication');

    application.authenticateAccount({
      username: req.user.username,
      password: req.body.existingPassword
    }, function (err) {
      if (err) {
        return writeError('The existing password that you entered was incorrect.');
      }

      req.user.password = req.body.password;

      saveAccount();
    });
  } else {
    saveAccount();
  }
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

spinner.text = 'Starting Dev Sever on port ' + port,
spinner.start();

app.on('error', failAndExit);
app.on('stormpath.error', failAndExit);

app.listen(port, function () {
  spinner.succeed();
  spinner.text = 'Initializing Stormpath';
  spinner.start();
  app.on('stormpath.ready', function () {
    spinner.succeed();
    console.log('\nListening at http://localhost:' + port);
    // Now bring back error logging.
    app.get('stormpathLogger').transports.console.level = 'error';
  });
});
