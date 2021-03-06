var argv = require('yargs')
	.command('hello', 'Greets the user', function (yargs){
		yargs.options({
			name:{
				demand: true
			}
		});
	})
	.argv;
var command = argv._[0];

console.log(argv);

if (command === 'hello' && typeof argv.name !== 'undefined'){
	if(typeof argv.lastname !== 'undefined'){
		console.log('Hello '+argv.name+' '+argv.lastname+'!');
	} else {
		console.log('Hello '+argv.name+"!");
	}
} else if (command === 'hello'){
	console.log('hello world!');
}