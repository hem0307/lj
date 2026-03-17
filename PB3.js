//write node js script to create two listiners for a common event print number of events associated with an emiter remove
// one of the listiner and call remaniing listiner again and also print remaining listiners

const e=require('events')
const ee=new e()

function fun(){console.log("Hello")}
function fun1(){console.log("How are you?")}

ee.on("start",fun)
ee.on("start",fun1)
ee.emit("start")

ee.removeListener("start",fun1)
ee.emit("start")

let a=ee.listenerCount("start")
console.log(a)