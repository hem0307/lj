// write node example with syncronous method 
// 1.create a folder name node 
// 2.create a file write.txt in this folder having data hi
// 3.append data goodmorning to this file
// 4.read the data from the file and display in console 
// 5.rename the file with write1.txt 
// 6.delete the folder
let fs=require('fs')
//fs.mkdirSync("node")
fs.writeFileSync("node/write.txt","hi")
fs.appendFileSync("node/write.txt","GoodMornig")
let data=fs.readFileSync("node/write.txt","utf-8")
console.log(data)
fs.renameSync("node/write.txt","node/write1.txt")


