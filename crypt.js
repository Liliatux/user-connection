var bcrypt = require('bcrypt');

var saltRounds = 10;
var password = "test";

bcrypt.hash(password, saltRounds, function(err, hash){
	console.log(hash);
});