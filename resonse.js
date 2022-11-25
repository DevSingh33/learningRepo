const http = require('http');
const server = http.createServer((req,res)=>{
  res.setHeader('dev', 'nameIs');
  res.write('hello');
  res.end();
});
server.listen(3000);