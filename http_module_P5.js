// Write Node js Script To Perfome Task As Asked Below
// 1) create 1 page with two links home and about
// 2) on home page wlcome to homepage should be displayed on about page load the image as responce and if any other page req is generated then display page under maintanance
var fs=require('fs')
var http=require('http')
a=fs.readFileSync("img.jpg")
b=fs.readFileSync("task.html")
http.createServer(function(req,res){
    if(req.url=="/")
    {
        res.writeHead(200,{"content-Type":"text/html"})
        res.write("<h1>Welcome To Home Page</h1>")
        res.write("\n")
        res.write(`</br><a href="/about">about</a>`)
        res.write("\n")
        res.write(`<a href="/details">details</a>`)
        res.end()
    }
    else if(req.url=="/about")
    {
        res.writeHead(200,{"content-Type":"image/jpg"})
        res.end(a)
    }
    else if(req.url=="/details")
    {
        res.writeHead(200,{"content-Type":"text/html"})
        res.end(b)
    }
    else
    {
        res.writeHead(404,{"content-Type":"text/plain"})
        res.end("Page under maintanance")
    }
}).listen(8088)