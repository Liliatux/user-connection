var  express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var bcrypt = require('bcrypt');

var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var user = {
	id: 'Zélia',
	mdp: 'test'
};

var login = {
	register: function(req, res){
		var post = req.body;
		if(post.id === user.id &&
			post.mdp === user.mdp){
			res.send({err: false, msg:'Vous êtes connecté'});
		} else{
			res.send({err: true, msg:"Erreur vous n'avez pas entré le bon login"});
		}		
	}
}

app.post('/public', login.register);

app.listen(2314);