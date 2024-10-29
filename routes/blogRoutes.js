const router=require('express').Router()
router.get("/readAllBlogPosts",(req,res)=>
        {  let qry= req.query
            res.send(`QuereyString : ${qry.id}, ${qry.name}`)
            
        });
        router.post("/readAllBlogPosts",(req,res)=>
        {  let qry= req.body
            res.send(`URL ENCODED : ${qry.TITLE}, ${qry.DESC}`)
            
        });

        module.exports = router;