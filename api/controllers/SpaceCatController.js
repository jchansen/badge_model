/**
 * SpaceCatController
 *
 * @description :: Server-side logic for managing spacecats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');
var request = require('request');
var badgeableActions = require('../lib/badgeableActions');

module.exports = {

  create: function (req, res) {
    // Create data object (monolithic combination of all parameters)
    // Omit the blacklisted params (like JSONP callback param, etc.)

    var slug = '1d509050d7f68341e8c09460580dd881';
    var emailkey = "anna@iplantc.org";
    var url = "http://localhost:8080/systems/demosys/badges/" + slug + "/instances";

    var data = actionUtil.parseValues(req);


    // Create new instance of model using data from params
    SpaceCat.create(data).exec(function created(err, newInstance) {

      // Differentiate between waterline-originated validation errors
      // and serious underlying issues. Respond with badRequest if a
      // validation error is encountered, w/ validation info.


      Rules.recordAction({
        action: badgeableActions.LAUNCH_SPACE_CAT,
        user: req.currentUser
      //}, function(err, badgeId){
      //  OpenBadgesService.grantBadge({badgeId: badgeId, email: email}, function(err, response){
      //    if(err) return console.log("Ruh-roh!");
      //    console.log("Yay!  Badge granted.");
      //  })
      });











      if (err) return res.negotiate(err);

      request.post(
        {url: url, json: true, body: { email: emailkey }},
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log(body) // Show the HTML for the Google homepage.
          }
        }
      );

      // Send JSONP-friendly response if it's supported
      // (HTTP 201: Created)
      res.status(201);
      res.ok(newInstance.toJSON());
    });
  }
}
