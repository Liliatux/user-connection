var  express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var user = {
	id: 'Zélia',
	mdp: 'test'
}

var login = {
	register: function(req, res){
		var post = req.body;
		var urlServ = 'http://localhost:2314/';

		if(post.id === user.id){
			res.send('Vous êtes connecté');
		} else{
			res.send('Erreur');
		}
	}
}

app.post('/public', login.register);

app.listen(2314);