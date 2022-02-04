
const slugify = require("slugify")
const Blogs = require("../models/blogs")

exports.create=(req,res)=>{
    const {title,content,author} = req.body
    let slug = slugify(title)

    //validate
    switch(true){
        case !title:
            return res.status(400).json({error:"please insert title"})
            break;
        case !content:
            return res.status(400).json({error:"please insert content"})
            break;

    }
    //res.json({
      //  data:{title,content,author,slug}
    //})

    console.log(`DEBUG title:${title} content:${content} author:${author} slug:${slug}`)

    Blogs.create({title,content,author,slug},(err,blog)=>{
        if(err){
            res.status(400).json({error:"Duplicate Title"})
        }
        res.json(blog)
    })
}

exports.getAllBlogs=(req,res)=>{
    Blogs.find({}).exec((err,blogs)=>{
        res.json(blogs)
    })
}