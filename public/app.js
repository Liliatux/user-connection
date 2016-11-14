(function(){
	var app = {
		url: 'http://localhost:2314/',

		init: function(){
			this.listeners();
		},

		listeners: function(){
			$("button").on('submit', this.login.bind(this));
		},

		login: function(event){
			event.preventDefault();
			this.ajax();
		},

		ajax: function(){
			$.ajax(this.url)
			.done(this.ajaxDone)
			.fail()
			.always();
		},

		ajaxDone: function(data){
			console.log(data);
		}
	}

	app.init();
})();