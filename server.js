var  express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var bcrypt = require('bcrypt');

var app = express();
var saltRounds = 10;

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var user = {
	id: 'Zélia',
	mdp: 'test'
};

var login = {
	register: function(req, res){
		var post = req.body;

		bcrypt.hash(user.mdp, saltRounds, function(err, hash){
			bcrypt.compare(post.mdp, hash, function(err, areSame){
				if(areSame && post.id === user.id){
					res.send({err: false, msg:'Vous êtes connecté'});
				} else{
					res.send({err: true, msg:"Erreur vous n'avez aps entré le bon login"});
				} 
			});		
		});
	}
};

app.post('/public', login.register);

app.listen(2314);