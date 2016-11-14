var  express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var bcrypt = require('bcrypt');

var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var user = {
	id: 'Zélia',
	mdp: '$2a$10$mL2HYDvGDrPuEmlQ/yASbOH7l6VXOuXIvCGNNn5kdINp.hx24fndK'
};

var login = {
	register: function(req, res){
		var post = req.body;
		bcrypt.compare(user.mdp, post.mdp, function(err, hash){
			if(hash){
				res.send({err: true, msg:"Erreur vous n'avez pas entré le bon login"});
			} else
				res.send({err: false, msg:'Vous êtes connecté'});
			}		
		});
	}
}

app.post('/public', login.register);

app.listen(2314);