const passport = require('passport'); //passport npm module

module.exports = (app) => {
  /* Route users to google oauth
   * request user profile and email
   * returns a code
   */
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  // Uses known code in exchange for user profile
  app.get('/auth/google/callback', passport.authenticate('google'));

  // Logout
  app.get('/api/logout', (req, res) => {
    req.logout();   // kill cookie
    res.send(req.user);
  });

  // Current User
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
