function sayHello(name){
console.log('Hello '+ name);
}
sayHello('world');

var os = require('node:os');
console.log(os.freemem());

//Template String 
console.log(`Total memory : ${os.totalmem()}`);