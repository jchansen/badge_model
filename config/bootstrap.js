/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */
//
//
//var LogIn = require('../api/services/LogIn');
//var Watcher = require('../api/services/Watcher');
//var Display = require('../api/services/Display');


module.exports.bootstrap = function(cb) {

//
//
//
//var login = new LogIn("loukia@iplant.org");
//var display = new Display();
//var watcher = new Watcher();
//
//display.setUser(login.getemail());
//display.setPath("/badges/b9bae1f5b345da27022e73cc8e8d6eb4/instances");









  //var login = new LogIn("loukia@iplantc.org");


  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
