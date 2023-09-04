const express = require('express')
const port = 3001
const cors = require('cors')
const app = express()
const userPool = require("./route/userRoute")
const blogPool = require("./route/blogRouter")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/user",userPool)
app.use("/api/blog",blogPool)

app.listen(port,()=>{
    console.log("server is listen");
})