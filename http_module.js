var http=require('http')
http.createServer(function(req,res)
{

    // res.write("Welcome")
    // res.write("Hello")
    // res.end("hi")
    res.writeHead(200,{"content-Type":"text/html"})
    res.write("hi")
    res.write("<h1>Hello world</h1>")
    res.end()

}).listen(8080)
