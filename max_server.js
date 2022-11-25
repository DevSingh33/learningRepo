const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req);
    console.log('\n--------------------------------------');
    console.log(res);
});
server.listen(3000);
// console.log(server);
// console.log('hello');