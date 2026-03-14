let data={"name":"abc","place":"Ahm"}
let fs=require('fs')
fs.writeFileSync("user.txt",JSON.stringify(data))
let Ndata=fs.readFileSync("user.txt","utf-8")
console.log(JSON.parse(Ndata).name)

