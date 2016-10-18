var request = require("request");
var yargs = require("yargs");
module.exports = function (location, callback) {
	encondedLocation = encodeURIComponent(location);
	var url = "http://api.openweathermap.org/data/2.5/weather?q="+encondedLocation+"&APPID=2f5b23e0c8a999f32b29b210fe40afed&units=metric";
	if (!location){
		return callback("No location provided");
	}

	request(
	{
		url: url, 
		json: true
	}, function (error, response, body) {
		if(error) {
			callback("Unable to fetch data from the weather server.");
		} else {
			callback("It\'s "+body.main.temp+" in "+body.name+"");
		}
	});
} 