/*function doWork(data, callback) {
	callback("done");
}

function doWorkPromise(data) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			reject("everything is fucked fuck");
		}, 5000);
		// reject({
		// 	error: "some wrong shit happened"
		// });
	});
}

doWorkPromise("some shit")
	.then(function (data) {
		console.log(data);
	}, function (error){
		console.log(error);
	})
	*/
var request = require("request");

function getWeather(location) {
	return new Promise(function (resolve, reject) {
		var encondedLocation = encodeURIComponent(location);
		var url = "http://api.openweathermap.org/data/2.5/weather?q="+encondedLocation+"&APPID=2f5b23e0c8a999f32b29b210fe40afed&units=metric";
		
		if (!location){
			return reject("No location provided");
		}

		request(
		{
			url: url, 
			json: true
		}, function (error, response, body) {
			if(error) {
				reject("Unable to fetch data from the weather server.");
			} else {
				resolve("It\'s "+body.main.temp+" in "+body.name+"");
			}
		});
	});
}

getWeather('new york').then(function (currentWeather) {
	console.log(currentWeather);
}, function (error){
	console.log(error);
});