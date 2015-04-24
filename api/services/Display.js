// this should make calls to badgekit to retrieve all badges for a "user"

var Display = function(){

  this.serviceObject = [{ // Does this represent Atmosphere? YES
    name: "",
    status: "Unknown",
    api: "localhost:8080",
    path: "/systems/badgekit/",
    user: ""
  }]
};

Display.prototype.setPath = function(newPath){
  this.serviceobject.path = newPath
},

Display.prototype.setUser = function(newUser){
  this.serviceObject.user = newUser
},

Display.prototype.get = function(cb){
  path = this.serviceObject.url + this.serviceObject.path + this.serviceObject.user
  request({

    url: this.serviceObject.url,
    method: "GET"
  }, function (error, response, body) {
    if(error) return cb(error);
    var bodyJSON = JSON.parse(body);
    return cb(null, bodyJSON);
  });
};
