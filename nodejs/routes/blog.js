const express = require("express")
const router = express.Router()
const {create,getAllBlogs,singleBlog} = require("../controllers/blogController")

router.post('/create',create)
router.get('/blogs',getAllBlogs)
router.get('/blog/:slug',singleBlog)

router.get('/',(req,res)=>{
    res.json({
        data:"API Version 1"
    })
})

module.exports=router