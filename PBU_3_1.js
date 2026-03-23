process.noDeprecation=true
var url=require('url')
var addr="https://localhost:8080/default.html?m1=30&m2=40&m3=60";
var q1=url.parse(addr,true)
v1=parseInt(q1.query.m1)
v2=parseInt(q1.query.m2)
v3=parseInt(q1.query.m3)
s=(v1+v2+v3)/3
console.log("Avg.",s)