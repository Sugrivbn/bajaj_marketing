var http = require("http")
var fs = require('fs');


fs.writeFileSynch('read.txt', 'Welcome to node js app')
http.createServer(function(req,res ){

    fs.readFile("./demo.html",function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data)
        return res.end()
    
})
}).listen(8080)

