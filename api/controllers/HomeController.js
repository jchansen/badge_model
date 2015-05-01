/**
 * HomeControllerController
 *
 * @description :: Server-side logic for managing Homecontrollers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index: function(req, res){
    //if (req.isAuthenticated()) {
      res.view("homepage", {user:req.user});
    //}
  }
};

