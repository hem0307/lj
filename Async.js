let fs=require('fs')
fs.writeFile("data.txt","Hello",(err)=>{
                                            if(err)throw err 
                                            console.log("File Written Successfully")
                                        })