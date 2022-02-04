const moongoose = require("mongoose")

const blogSchema = moongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: {},
        required: true
    },
    author: {
        type: String,
        default: "Admin"
    },
    slug: {
        type: String,
        lowercase: true,
        unique: true
    }
},{timestamps:true})

module.exports = moongoose.model("Blogs",blogSchema)