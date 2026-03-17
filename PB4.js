//write node js script to handle events as asked below
// 1) check the radius is negative or not if negative then display message radius must be positive else calculate perimeter of circle
// 2) check side is negative or not if negative then display ,essage side must be positive else calculate perimeter of square

// const e=require('events')
// const ee=new e()

// ee.on("negative",()=>{console.log("radius must be positive")})
// ee.on("negative",()=>{console.log("side must be positive")})
// ee.on("start",(r,l)=>{
//     if(r<0){
//         ee.emit("radius must be positive")
//     }
//     else{
//         var re=2*Math.PI*r
//         console.log("perimeter of circle",re)
//     }
//     if(l<0){
//         ee.emit("side must be positive")
//     }
//     else{
//         var re=4*l
//         console.log("perimeter of square",re)
//     }
// })
// ee.emit("start",(10),3)

const e=require("events")
const ee=new e()
ee.on("nr",()=>{
    console.log("radius must be positive")})
ee.on("ns",()=>{
console.log("side must be positive");
});
ee.on("findval",(r,s)=>{
if(r<0){
    ee.emit("nr")
}
else{
    var rpar=2*3.14*r
    console.log("parameter of circle "+rpar);
}
if(s<0){
    ee.emit("ns")
}
else{
    var spar=4*s
    console.log("parameter of square "+spar);
}
})
ee.emit("findval",10,3)

