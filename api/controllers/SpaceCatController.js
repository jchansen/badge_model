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

    var data = actionUtil.parseValues(req);


    // Create new instance of model using data from params
    SpaceCat.create(data).exec(function created(err, newInstance) {

      Rules.recordAction({
        action: badgeableActions.LAUNCH_SPACE_CAT,
        user: req.user.emails[0].value
      });


      // Send JSONP-friendly response if it's supported
      // (HTTP 201: Created)
      res.status(201);
      res.ok(newInstance.toJSON());
    });
  }
}
