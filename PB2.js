// write a node ja script to write a data you are creating a file to help.txt file after that append the text your are appending data to same help.txt fime after that 
//read the file and print file contain on console after finishing read operation print the line thanks for using my program on console. write append read sequence 
//must be maintained . all these operatons are Async

let fs=require('fs')
fs.writeFile("help.txt","You are creating a file",(err)=>{  
                                                            if(err)throw err 
                                                            console.log("Write Successfully")
fs.appendFile("help.txt","data add",(err)=>{
                                                if(err)throw err
                                                console.log("Append Successfully")
fs.readFile("help.txt","utf-8",(err,data)=>{
                                                if(err) throw err
                                                console.log(data)
                                                console.log("Thanks for using microgram ")
})})})