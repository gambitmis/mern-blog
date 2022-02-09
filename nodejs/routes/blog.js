const express = require("express")
const router = express.Router()
const {create,getAllBlogs,singleBlog,removeBlog,updateBlog} = require("../controllers/blogController")

router.post('/create',create)
router.get('/blogs',getAllBlogs)
router.get('/blog/:slug',singleBlog)
router.delete('/blog/:slug',removeBlog)
router.put('/blog/:slug',updateBlog)

router.get('/',(req,res)=>{
    res.json({
        data:"API Version 1"
    })
})

module.exports=router