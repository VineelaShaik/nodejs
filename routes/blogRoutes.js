const router=require('express').Router()
app.get("/readAllBlogPosts",(req,res)=>
        {  let qry= req.query
            res.send(`QuereyString : ${qry.id}, ${qry.name}`)
            
        });
app.post("/readAllBlogPosts",(req,res)=>
        {  let qry= req.body
            res.send(`URL ENCODED : ${qry.TITLE}, ${qry.DESC}`)
            
        });