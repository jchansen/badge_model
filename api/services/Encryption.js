
var jws = require('jws')
var crypto = require('crypto');

var encrypt = function(request) {

  var body = request.body;
  var computedHash = crypto.createHash('SHA256').update(JSON.stringify(body)).digest('hex')

  var token = jws.sign({
    secret: "secret",
    header: {typ: "JWT", alg: "HS256"},
    payload: {
      key: "master",
      method: request.method,
      path: request.url,
      body: {
        alg: "sha256",
        hash: computedHash
      }
    }
  });

  return token;

}

module.exports = {
  encrypt: encrypt
};
