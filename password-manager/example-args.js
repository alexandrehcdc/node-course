var argv = require("yargs")
	.command("hello", "Greets tha usah", function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: "n",
				description: "primeiro nome"
			},
			lastname: {
				demand: true,
				alias: "l",
				description: "ultimo nome"
			}
		}).help("help");
	})
	.help("help")
	.argv;
var command = argv._[0];

/*console.log(argv);*/

if (command === "hello" && typeof argv.name !== "undefined" && typeof argv.lastname !== "undefined"){
	console.log("tfunfou");
} else if (command === "hello" && typeof argv.name !== "undefined"){
	console.log("deu ruim");	
} else if (command === "hello" && typeof argv.lastname !== "undefined"){
	console.log("deu pior");
} 