let fs=require('fs')
fs.writeFile("data.txt","Hello",(err)=>{
                                            if(err)throw err 
                                            console.log("File Written Successfully")
                                        })
let fs1=require('fs')
fs1.appendFile("a.txt","Hello",(err)=>{
                                        if(err) throw err 
                                        else{console.log("Data addded Successfully")

                                        }})
let fs2=require('fs')
fs2.copyFile("a.txt","b.txt",(err)=>{
                                        if(err) throw err 
                                        else{console.log("File copy successfully")

                                        }})
let fs3=require('fs')
fs3.rename("a.txt","a1.txt",(err)=>{
                                        if(err) throw err 
                                        else{console.log("Rename successfully")

                                        }})
let fs4=require('fs')
fs4.mkdir("fsd",(err)=>{
                            if(err) throw err 
                            else{console.log("foler create successfully")

                            }})
let fs5=require('fs')
fs5.rmdir("fsd",(err)=>{
                            if(err) throw err 
                            else{console.log("foler delete successfully")
                                                            
                            }})
let fs6=require('fs')
fs6.unlink("a1.txt",(err)=>{
                                if(err) throw err
                                else{console.log("file Delete successfully")

                            }})
let fs7=require('fs')
fs7.readFile("User1.txt","utf-8",(err,data)=>{
                                                if(err) throw err
                                                else{console.log(data)

                                                }})