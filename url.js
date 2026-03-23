process.noDeprecation=true
var url=require("url")

var addr="https://localhost:8080/default.html?Name=Prof.KhushbuPatel&initial=PKP#MAM"
var q1=url.parse(addr,true)
console.log(q1)
console.log(q1.host)
console.log(q1.pathname)
console.log(q1.query)
console.log(q1.query.Name)
