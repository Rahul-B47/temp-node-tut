const {readFile,writeFile} = require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
   const first =result;
   readFile('./content/subfolder/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second =result;
        writeFile('./content/result-async.txt',`here is the result :${first},${second}}`,{flag:'a'},(err,result)=>{
            if(err){
                console.log(err)
                return
            }
            console.log(result)
        })
    })
})