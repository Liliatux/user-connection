var  express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var bcrypt = require('bcrypt');

var app = express();
var saltRounds = 10;

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

//Login correct
var user = {
	id: 'Zélia',
	mdp: 'test'
};

//Req post du formulaire
var login = {
	register: function(req, res){
		var post = req.body;

		//cryptage du mot de passe à chaque essaie de connexion
		bcrypt.hash(user.mdp, saltRounds, function(err, hash){
			bcrypt.compare(post.mdp, hash, function(err, areSame){
				//si l'identifiant et le mdp du formulaire sont pareil de user se connecter
				if(areSame && post.id === user.id){
					res.send({err: false, msg:'Vous êtes connecté'});
				//sinon afficher erreur
				} else{
					res.send({err: true, msg:"Erreur vous n'avez aps entré le bon login"});
				} 
			});		
		});
	}
};

app.post('/public', login.register);

app.listen(2314);