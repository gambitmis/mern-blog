const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv").config();
const blogRoute = require('./routes/blog')
const authRoute = require('./routes/auth')

const app = express()

//connect cloud database
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>console.log("Mongodb Althas Connection OK"))
.catch((err)=>console.log(err))

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//route
app.get("/",(req,res)=>{
    res.json({
        data:"message from server"
    })
})

//route
app.use('/api',blogRoute)
app.use('/api',authRoute)

const port = process.env.BACKEND_PORT || 3002

app.listen(port,()=>{
    console.log(`start server in port ${port}`)
})