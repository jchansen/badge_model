/**
 * AuthControllerController
 *
 * @description :: Server-side logic for managing Authcontrollers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var passport = require("passport");

module.exports = {
  login: function (req, res) {
    passport.authenticate('auth0')(req, res);
  },

  user: function(req, res){
    res.json(req.user);
  },

  callback: function(req, res, next){
    passport.authenticate('auth0', {
      successRedirect: '/',
      failureRedirect: '/login'
    })(req, res, next);
  },

  logout: function (req, res) {
    req.logout();
    res.redirect("/");
  }

};

