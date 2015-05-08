var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');
var request = require('request');
var badgeableActions = require('../lib/badgeableActions');


grantBadge = function(obj){
  //var badgeid = obj.badgeId
  var emailkey = obj.email
  var host = "http://localhost:8080"
  var apicall = obj.url



  var reqObject = {url: apicall, json: true, body: { email: emailkey }, method: "POST"}
  // call encryption

  var auth = 'JWT token="' + Encryption.encrypt(reqObject) + '"';
  console.log(auth)

  var requestOptions = {
    method : reqObject.method,
    headers: { 'Authorization': auth
    },
    body: reqObject.body,
    url: host + reqObject.url,
    json: true
  };


  request(requestOptions,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
      }
    }
  );


}

module.exports= {
  grantBadge: grantBadge
}
