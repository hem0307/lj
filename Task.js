//write node js script to fatch values from url given below. and display output as ask.
//1. data must be return as below in file name "exam.txt" file name must be fatched from the url given.
//2. read the content from the file "exam.txt" and send to server display data on home page.
//3. if any other pages requested than show "page not found" in plain text
//"https://www.google.com/exam.txt?C1=Hello&C2=FSD2T1Test&C3=WelcometoLJU#AllTheBest"
// o/p: Hello!
//      Welcome to LJU FSD2T1 test
//      AllTheBest


process.noDeprecation=true
var url=require("url")
var http=require('http')
var fs=require('fs')
const { hash } = require("crypto")
var addr="https://www.google.com/exam.txt?C1=Hello&C2=FSD2T1Test&C3=WelcometoLJU#AllTheBest"
var q1=url.parse(addr,true)
a=q1.query.C1
b=q1.query.C2
c=q1.query.C3
h=q1.hash
p=q1.pathname
filecotent=C1+"!"+C3+" "+C2+"\n"+hash
fs.writeFileSync(p,filecotent)
http.createServer(function(req,res){

    if(req.url=="/"){
        dat=fs
        res.writeHead(200,{"content-Type":"text/html"})
        res.write(`<h1 style="color:blue" > Welcome to home page</h1>`)
        res.end()
    }

}).listen(8080)