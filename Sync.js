let fs=require('fs')

//for write data in file
fs.writeFileSync("user.txt","Hello")

//for next line
fs.appendFileSync("user.txt","\n World")

//read data from file and print at terminal
var data=fs.readFileSync("user.txt","utf-8")
console.log(data)

//read data from file and print at terminal
console.log(data.toString())

//rename file
fs.renameSync("user.txt","User1.txt")

//copy file
fs.copyFileSync("User1.txt","User2.txt")

//Delete file
fs.unlinkSync("User2.txt")

//create a directory(folder)

//fs.mkdirSync("fsd")
fs.writeFileSync("fsd/user.html","<h1>Hello</h1>")
fs.unlinkSync("fsd/user.html")
fs.rmdirSync("fsd")