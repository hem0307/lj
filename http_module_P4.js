var http=require('http')
var fs=require('fs')
a=fs.readFileSync()
http.createServer(function(req,res){
    res.writeHead(200,{"content-Type":"image/jpg"})
    res.end(a)
}).listen(8082)