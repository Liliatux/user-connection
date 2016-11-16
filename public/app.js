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
			var login = {
				id: $("#ident").val(),
				mdp: $("#motDePasse").val()
			};
			this.ajaxLogin(login);
		},

		//Envoie des valeurs du formulaire au serveur
		ajaxLogin: function(login){
			$.ajax({
				url: $("form").attr("action"),
				method: 'post',
				data: login,
				success: function(data){
					if(data.err === true){
						$("#error").show().html(data.msg);
						$("form").trigger('reset');
					} else{
						$("html").html(data.msg);
					}
				}
			});
		}
	}

	app.init();
})();