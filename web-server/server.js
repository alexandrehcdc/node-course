var express = require("express");
var app = express();
var PORT = 3000;
var middleware = require("./middleware.js");

app.use(middleware.logger);

app.get("/about", middleware.requireAuthentication, function (request,response){
	response.send("pagina sobre a gente mil grau");
});

app.use(express.static(__dirname));

app.listen(PORT, function () {
	console.log("O servidô ta pra cima na "+PORT);
});