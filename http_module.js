var http=require('http')
http.createServer(function(req,res)
{

    // res.write("Welcome")
    // res.write("Hello")
    // res.end("hi")

    res.end("Welcome to 8080")

}).listen(8080)
