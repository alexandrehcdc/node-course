console.log("starting password manager");

var storage = require("node-persist");
var argv = require("yargs")
	.command("create", "Create a new account in our system", function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: "n",
				description: "Seu primeiro nome: ",
				type: "string"
			},
			username: {
				demand: true,
				alias: "u",
				description: "Nome utilizado como usuário:",
				type: "string"
			},
			password: {
				demand: true,
				alias: "pw",
				description: "Sua senha",
				type: "string"
			},

		}).help("help");
	})
	.command("get", "Retrieve information about your account", function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: "n",
				description: "Seu primeiro nome: ",
				type: "string"
			}/*,
			username: {
				demand: true,
				alias: "u",
				description: "Nome utilizado como usuário:",
				type: "string"
			},
			password: {
				demand: true,
				alias: "pw",
				description: "Sua senha",
				type: "string"
			},*/

		}).help("help");
	})
	.help("help")
	.argv;
storage.initSync();

// function commandOperation(command){
// 	if (command === "create"){
// 		createAccount(argv);
// 	}
// 	else if (command === "get"){

// 		var fetchedAccount = getAccount(argv.name);
// 		switch (fetchedAccount) {
// 			case "undefined":
// 				console.log("Your account wasn't found");
// 				break;
// 			default:
// 				console("Your account was found, "+argv.name+"!");
// 				console.log(fetchedAccount);
// 		}

// 	}



function createAccount (account) {
	var accounts = storage.getItemSync("accounts");
	
	if (typeof accounts === "undefined") {
		accounts = [];
	}
	
	accounts.push(account);
	storage.setItemSync("accounts", accounts);

	return account;
}

function getAccount (accountName) {
	var accounts = storage.getItemSync("accounts");
	var matchedAccount;
	
	accounts.forEach(function (account){
		if (account.name === accountName) {
			matchedAccount = account;
		} 
	}); 

	return matchedAccount;
// var facebookAccount = getAccount("Facebook");
// console.log(facebookAccount);
}

if(command === "create"){
	var createdAccount = createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	});
	console.log("Account created!");
	console.log(createdAccount);
} else if (command === "get") {
	var fetchedAccount = getAccount(argv.name);
	if(fetchedAccount === "undefined"){
		console.log("Account not found");
	} else {
		console.log("Account found!");
		console.log(fetchedAccount);
	}
}


















// commandOperation(argv);


// var facebookAccount = getAccount("Facebook");
// console.log(facebookAccount);