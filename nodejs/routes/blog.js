const express = require("express")
const router = express.Router()
const {create} = require("../controllers/blogController")

router.post('/create',create)

router.get('/',(req,res)=>{
    res.json({
        data:"API Version 1"
    })
})

module.exports=router