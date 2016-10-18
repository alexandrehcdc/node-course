console.log('starting password-manager');

var storage = require('node-persist');
storage.initSync(); 

// storage.setItemSync('account', [{
// 	username: 'Alexandre',
// 	balance: 0
// }]);

var account = storage.getItemSync('account');

// account.push({
// 	username:'Fart',
// 	balance: 1337
// });

// storage.setItemSync('account', account);

console.log(account);