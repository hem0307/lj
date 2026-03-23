var http=require('http')
http.createServer(function(req,res)
{
    // console.log(req)
    // res.write(req.url)
    // res.end()

    if(req.url=="/"){
        res.writeHead(200,{"content-Type":"text/html"})
        res.write(`<h1 style="color:blue" > Welcome to home page</h1>`)
        res.end()
    }
    else if(req.url=="/abcd"){
        res.writeHead(200,{"content-Type":"text/html"})
        res.write(`<h1 style="color:green" > Welcome to about page</h1>`)
        res.end()
    }
    else{
        res.writeHead(404,{"content-Type":"text/html"})
        res.end("Page not found")
    }
    
}).listen(8082)