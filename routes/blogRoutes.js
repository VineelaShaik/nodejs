const router = require('express').Router();

const BlogControllers = require('./controllers/blogControllers');

router.get("/readAllBlogPosts", BlogControllers.readAllBlogPosts);
router.get("/readSpecificData", BlogControllers.readSpecificData);
router.post("/createBlogPost", BlogControllers.createBlogPost);
router.put("/updateBlogPost", BlogControllers.updateBlogPost);
router.delete("/deleteBlogPost/:id", BlogControllers.deleteBlogPost);

module.exports = router;