var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

var strategy = new Auth0Strategy({
  domain:       'iplant-badges.auth0.com',
  clientID:     'K7jMfOz1Oyt4JD1IaLRBNL0G9SVChjEc',
  clientSecret: '9wsBmLIbjb8o5K8Rrqd3biNsFGNfaI_wTAZtHA_hctj6fUByrBTD2tdrm2YmwiJb',
  callbackURL:  '/auth/callback'
}, function(accessToken, refreshToken, extraParams, profile, done) {
  // accessToken is the token to call Auth0 API (not needed in the most cases)
  // extraParams.id_token has the JSON Web Token
  // profile has all the information from the user
  var user = {
     username: profile.nickname
  }
  return done(null, profile);
});

passport.use(strategy);

// This is not a best practice, but we want to keep things simple for now
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = strategy;
