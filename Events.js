const e=require('events')
const ee=new e()

function fun() { console.log("Hello") }
ee.on("start",fun)
ee.emit("start")

console.log("----------------------------------------->")

function fun1(a,b){ console.log("Hello",a+b) }
ee.on("start",fun1)
ee.emit("start",20,30)

console.log("----------------------------------------->")

ee.on("start",()=>{console.log("hello")})
ee.emit("start")

console.log("----------------------------------------->")

ee.on("start",(a,b)=>{console.log("hello from",a,"to",b)})
ee.emit("start",1,100)

console.log("----------------------------------------->")

ee.addListener("start",(a,b)=>{console.log("hello from",a,"to",b)})
ee.emit("start",1,100)

console.log("----------------------------------------->")