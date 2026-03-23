var http=require('http')
http.createServer(function(req,res)
{

    // res.writeHead(200,{"content-Type":"text/html"})
    // res.write("<h1> Hello in H1 <h1>")
    // res.writeHead(200,{"content-Type":"text/plaing"})
    // res.write("<h1> Hello in H1 <h1>")
    res.writeHead(200,{"content-Type":"application/json"})
    let a={Name:"abc",no:1}
    res.write(JSON.stringify(a))
    
    res.end()
    
}).listen(8080)