const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const key = require('../config/keys');

const User = mongoose.model('users'); //one arg to fetch
                                      //two args to load
// use data pulled from db to create a token
passport.serializeUser( (user, done) => {
  //done callback
  done(null, user.id);  //no error, _id from mongo (not profile ID)
});                     //          this permits users to sign in with
                        //          multiple authentication

// use _id to get a user model instance
passport.deserializeUser( (id, done) => {
  //search for user by _id
  User.findById(id)
    .then(user => {
      done(null, user);
    })
});

/* GoogleStrategy contains an internal ID called 'google'
 * it also includes various scopes in oauth process
 *  i.e. profile/email
 * defines passport behavior
 * create an instance of GoogleStrategy
 * to pass in config for oauth
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: key.googleClientID,
      clientSecret: key.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      //query mongo records for existing profile id
      //returns a promise (async)
      const existingUser = await User.findOne({ googleId: profile.id })
      if(existingUser){
        //a record already exists
        return done(null, existingUser);   //no error, return found user
      }
      //save new model instance to db with this ID
      //returned from db
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
