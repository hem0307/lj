// create http web page on which home page display welcome to login page in blue color and font size must be 32px
// login page shows html file from the static url  having form of details for username pss submit and reset button
// gallery page reflect 1 img hello.jpg and any other page shows page not found weite all necessary files to perform the task

var fs=require('fs')
var http=require('http')
a=fs.readFileSync("login.html")
b=fs.readFileSync("img.jpg")
http.createServer(function(req,res){
    if(req.url=="/")
    {
        res.writeHead(200,{"content-Type":"text/html"})
        res.write(`<a style="color: blue" font-size="32px">Welcome To Login Page</a>`)
        res.write("\n")
        res.write(`</br><a href="/login">Login</a>`)
        res.write("\n")
        res.write(`<a href="/gallery">Gallery</a>`)
        res.end()
    }
    else if(req.url=="/login")
    {
        res.writeHead(200,{"content-Type":"text/html"})
        res.end(a)
    }
    else if(req.url=="/gallery")
    {
        res.writeHead(200,{"content-Type":"image/jpg"})
        res.end(b)
    }
    else
    {
        res.writeHead(404,{"content-Type":"text/plain"})
        res.end("Page under maintanance")
    }
}).listen(8088)