/**
 * UserBadgesController
 *
 * @description :: Server-side logic for managing userbadges
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var request = require('request');
var enc = require('../services/Encryption')

module.exports = {
  index: function findRecords (req, res) {
    var emailkey = req.user.emails[0].value
    var host = "http://localhost:8080"
    var url = "/systems/demosys/"+"instances/" + emailkey;


    var reqObject = {url: url, json: true, body: {}, method: "GET"}
    // call encryption

    var auth = 'JWT token="' + enc.encrypt(reqObject) + '"';
    console.log(auth) //TODO take out

    var requestOptions = {
      method : reqObject.method,
      headers: { 'Authorization': auth
      },
      url: host + reqObject.url,
      body: reqObject.body,
      json: true
    };

;
    request(
      requestOptions,
      function (error, response, body) {

        if (error) console.log(response); throw error;
        res.status(response.statusCode);
        res.send(body);
      }
    );

  }


};

