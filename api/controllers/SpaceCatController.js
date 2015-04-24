/**
 * SpaceCatController
 *
 * @description :: Server-side logic for managing spacecats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

module.exports = {

  create: function (req, res) {

    // Create data object (monolithic combination of all parameters)
    // Omit the blacklisted params (like JSONP callback param, etc.)
    var data = actionUtil.parseValues(req);

    // Create new instance of model using data from params
    SpaceCat.create(data).exec(function created(err, newInstance) {

      // Differentiate between waterline-originated validation errors
      // and serious underlying issues. Respond with badRequest if a
      // validation error is encountered, w/ validation info.
      if (err) return res.negotiate(err);


      // Send JSONP-friendly response if it's supported
      // (HTTP 201: Created)
      res.status(201);
      res.ok(newInstance.toJSON());
    });
  }
}
