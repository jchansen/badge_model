actionBadgeMap = {
  LAUNCH_SPACE_CAT:
      {first: "1d509050d7f68341e8c09460580dd881",
      fifth: "25133996b81b2695bc4ab0ed65d5a4cd"},
  LAUNCH_SPACE_DOG:
      {first: "aeb7128764d977d86676f566f167b303",
      fifth:"9ad3a41da68d330e72a510037222b718"}}


recordAction = function(obj){
  var action = obj.action;
  var user = obj.user;



  // get slug by associated badge

  var slug = actionBadgeMap[action]

  Action.findOrCreate({label: action, email: user}).exec(function(err, createdAction){
    Action.update(createdAction.id, {tally:createdAction.tally +1}).exec(function(err, updatedAction){
      // logic
      // first badge
      if (updatedAction.tally === 1){
        var url = "http://localhost:8080/systems/demosys/badges/" + slug.first+ "/instances";
        OpenBadgesService.grantBadge({badgeId: slug.first, email: user, url: url}, function(err, response) {
          if (err) return console.log("Ruh-roh!");
          console.log("Yay!  Badge granted.");
        })
      }
      // 5th badge
      if (updatedAction.tally === 5){
        var url = "http://localhost:8080/systems/demosys/badges/" + slug.fifth + "/instances";
        OpenBadgesService.grantBadge({badgeId: slug.fifth, email: user, url: url}, function(err, response) {
          if (err) return console.log("Ruh-roh!");
          console.log("Yay!  Badge granted.");
        })
      }




    })
  });
  //
  //// generate URLs for granting
  //var url = "http://localhost:8080/systems/demosys/badges/" + slug + "/instances";
  //
  //
  //
  //OpenBadgesService.grantBadge({badgeId: slug, email: user, url: url}, function(err, response) {
  //  if (err) return console.log("Ruh-roh!");
  //  console.log("Yay!  Badge granted.");
  //})
};

module.exports = {
  recordAction: recordAction,
  actionbadgemap: actionBadgeMap
};
