function readAllBlogPosts(req, res) {
    res.send("Get all blog posts");
}

function readSpecificData(req, res) {
    res.send("Get specific blog posts");
}

function createBlogPost(req, res) {
    res.send("Create new blog post");
}

function updateBlogPost(req, res) {
    res.send("Update blog post");
}

function deleteBlogPost(req, res) {
    res.send("Delete blog post");
}

module.exports = {
    readAllBlogPosts,
    readSpecificData,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
}