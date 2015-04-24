// a simple thing to take in input for "user"

var email;

var LogIn = function(email){
    this.email = email
};



LogIn.prototype.getemail = function(){
  return this.email
};

