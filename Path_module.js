var pm=require("path")
a="D:/LJ/abc.html"
console.log(pm.basename(a))
console.log(pm.dirname(a))
console.log(pm.extname(a))
console.log(pm.parse(a))
var fs=require('fs')
fs.mkdirSync(pm.dirname(a))
fs.writeFileSync(a,"This is html file")