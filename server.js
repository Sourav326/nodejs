const http = require('http');

http.createServer((req,res,next) => {
    res.end('Server Started');
    
}).listen(3001,'localhost',()=>{
    console.log('server running........'); 
});