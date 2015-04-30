var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');
var request = require('request');
var badgeableActions = require('../lib/badgeableActions');

grantBadge = function(obj){
  var badgeid = obj.badgeId
  var emailkey = obj.email
  var apicall = obj.url



  request.post(
    {url: apicall, json: true, body: { email: emailkey }},
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
