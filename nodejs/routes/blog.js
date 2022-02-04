const express = require("express")
const router = express.Router()
const {create,getAllBlogs} = require("../controllers/blogController")

router.post('/create',create)
router.get('/blogs',getAllBlogs)

router.get('/',(req,res)=>{
    res.json({
        data:"API Version 1"
    })
})

module.exports=router