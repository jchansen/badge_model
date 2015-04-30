/**
 * UserBadgesController
 *
 * @description :: Server-side logic for managing userbadges
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var request = require('request');

module.exports = {
  index: function findRecords (req, res) {
    var emailkey = "anna@iplantc.org"
    var url = "http://localhost:8080/systems/demosys/"+"instances/" + emailkey;

    request(
      url,
      function (error, response, body) {
        res.status(response.statusCode);
        res.send(body);
      }
    );

  }


};

