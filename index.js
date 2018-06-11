const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');           //order matters here
require('./models/Survey');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();              //generates app

//Middleware
// operate on incoming requests before sending
// them to request handlers
app.use(bodyParser.json());   //asigns PUT/POST/PATCH requests to req.body
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,   //30 days before expires
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);  //pass app to authRoutes
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if( process.env.NODE_ENV === 'production'){
  //Express serves production assests
  //i.e. main.js file/ main.css file
  app.use(express.static('client/build'));

  //Express serves index.html file
  //if it doesn't recognize the routes
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5500;      //heroku dynamic port binding at runtime
                                            //does not appear in development env
app.listen(PORT);                           //defines port
