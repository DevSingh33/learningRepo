const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url==='/'){
        res.setHeader('dfas','text/html');
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head');
        res.write('<body><p>Welcome</p></body>');
        // res.write('</html>');
        
        res.end();
    }
    if (url ==='/users') {
        
    }
})

server.listen(4000);