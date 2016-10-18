var middleware = {
	requireAuthentication: function (request, response, next) {
		console.log("acertou a rota privada");
		next();
	},
	logger: function (request, response, next) {
		console.log(""+new Date().toString()+" "+request.method + " " + request.originalUrl);
		next();
	}
};

module.exports = middleware;