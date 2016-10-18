// function doWork(shouldFail) {
// 	return new Promise(function (resolve,reject){
// 		setTimeout(function () {
// 			if(typeof shouldFail === "boolean" && shouldFail === true){
// 				reject("u fucked up");
// 			} else {
// 				resolve("done fucker");
// 			}
// 		}, 1337);
// 	});
// }

// doWork().then(function (message) {
// 	console.log(message);
// 	return doWork(true);
// }).then(function (message){
// 	console.log(message);
// 	console.log("all done fucboy");
// }).catch(function (error){
// 	console.log(error);
// });


function getLocation(){
	return new Promise(function (resolve, reject){
		resolve("Maceió");
	});
}

function getWeather(location){
	return new Promise(function (resolve, reject){
		resolve("ta um calor do cranco em"+location+"!");
	});
}

getLocation()
	.then(function (location) {
		return getWeather(location);
	})
	.then(function (currentWeather){
		console.log(currentWeather);
	});