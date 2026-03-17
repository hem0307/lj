const e=require('events')
const ee=new e()

function fun(){console.log("hello")}
function fun1(){console.log("Hello1")}

ee.on("start",fun1)
ee.on("start",fun)
ee.emit("start")

console.log("----------------------------------------->")

ee.removeListener("start",fun)
ee.emit("start")

console.log("----------------------------------------->")

ee.removeAllListeners("start")
ee.emit("start")

console.log("----------------------------------------->")

let a=ee.listenerCount("start")
console.log(a)

console.log("----------------------------------------->")
