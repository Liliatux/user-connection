(function(){
	var app = {
		url: 'http://localhost:2314/',

		init: function(){
			this.listeners();
		},

		listeners: function(){
			$("form").on('submit', this.login.bind(this));
		},

		login: function(event){
			event.preventDefault();
			var login = {
				id: $("#ident").val(),
				mdp: $("#motDePasse").val()
			};
			this.ajaxLogin(login);
		},

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