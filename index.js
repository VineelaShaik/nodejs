const fs =require('fs')
const path="blog.json"
//readAll
function readAllBlogPosts(req,res) {
    try {
        fs.readFile(path, "utf8", (err, data) => {
            let results = JSON.parse(data);
            if(err)
                console.log(err);
            else {
                if(results.length > 0){
                    res.send(
                    {
                        "data": res,
                        "message": "",
                        "err": ""
                    }
                );
            }
                else{
                    res.send(
                        {
                            "data": "",
                            "message": "No Blog Posts Found!",
                            "err": ""
                        }
                    );
                   
            }
    }})
    } catch (err) {
        res.send(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        )
    }
}


function createBlogPost(req,res){
    let obj={
        "id":5,
        "title":"Blog5",
        "Description":"description"

    }
    try{
        fs.readFile(path,"utf8",(err,data)=>{
            if(err){
                console.log(err)
            }
            else{
                let res=JSON.parse(data)
              let flag=false
              for(let i=0;i<res.length;i++){
                if (res[i].title==obj.title){
                    flag=true
                }
              }
              if (flag){
                res.send({
                    "data":"",
                    "message":"Blog already exists",
                    "err":""
                });
         
              } 
              else{
                res.push(obj)
                fs.writeFileSync(path,JSON.stringify(res))
                res.send({
                    "data":"",
                    "message":"Blog created successfuly",
                    "err":""
                });
              
              } 
        }
        })

    }
    catch(err){
        res.send({
            "data":"",
            "message":"",
            "err":err.message
            }) ;
            
    }
}

function readSpecificData(){
   try{
    let title="Blog5"
    fs.readFile(path,"utf8",(err,data)=>{
        let re=JSON.parse(data)
        if (err)
            console.log(err)
       else{
        
       if (re.length>0){
        let results=[]
        for(let i=1;i<re.length;i++){
            if(re[i].title==title){
                results.push(res[i])
            }
        }
           if (results.length>0){res.send({
            "data":results,
            "message":"",
            "err":""
        })
  }
        else{res.send({
            "data":"",
            "message":"No Blog Posts found",
            "err":""
        })
    
    }
       }
       else{
        res.send({
            "data":"",
            "message":"No Blog Posts found",
            "err":""
        })

       }
               
            }
        }
    )
      
} 
  
      catch(err){
    res.send({
        "data":"",
        "message":"",
        "err":err.message
    })
  
   }
}

function updateBlogPost() {
    try {
        let obj = {
            "id": 3,
            "description": "DESCR3"
        };
        fs.readFile(path, "utf8", (err, data) => {
            let res = JSON.parse(data);
            if(err)
                console.log(err);
            else {
                if(res.length > 0) {
                    let i = res.findIndex(v => v.id === obj.id);
                    console.log(i);
                    res[i] = {...res[i], ...obj};
                    fs.writeFileSync(path, JSON.stringify(res));
                    console.log({
                        "data": "",
                        "message": "Blog Post Updated!",
                        "err": ""
                    })
                   
                } else {
                    res.send(
                        {
                            "data": "",
                            "message": "No Blog Posts Found!",
                            "err": ""
                        }
                    );
                 
                }
            }
        });
    } catch (err) {
        res.send(
            {
                "data": "",
                "message": "",
                "err": err.message
            }
        )
       
    }
}
module.exports={
    readAllBlogPosts,
    readSpecificData,
    createBlogPost,
    updateBlogPost
}