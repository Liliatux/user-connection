(function(){
	var app = {
		url: 'http://localhost:2314/',

		init: function(){
			this.listeners();
		},

		//soumission du formulaire
		listeners: function(){
			$("form").on('submit', this.login.bind(this));
		},

		//récupération de la valeur des input en un objet login
		login: function(event){
			event.preventDefault();
			var identifiant = {
				id: $("#ident").val(),
				mdp: $("#motDePasse").val()
			};
			this.ajaxLogin(identifiant);
		},

		//Envoie des valeurs du formulaire au serveur
		ajaxLogin: function(identifiant){
			$.ajax({
				url: $("form").attr("action"),
				method: 'post',
				data: identifiant,
				success: function(data){
					$("html").html(data);
				},
				error: function(data){
					$("#error").show().html("Erreur vous n'avez pas entré le bon login");
					$("form").trigger('reset');
				}
			});
		}
	}

	app.init();
})();