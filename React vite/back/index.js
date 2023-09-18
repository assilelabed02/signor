const express = require('express')
const cors = require('cors')
const app = express()
const userPool = require("./route/authRoute")
const userOperationPool = require("./route/userOperationRout")
const blogPool = require("./route/blogRoute")
const port = 3001
const db = require('./database')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const confirmeCreation = require("./database/model/userAuth")


app.use("/api/auth",userPool)
app.use("/api/get/all",userOperationPool)
app.use("/api/get/one",userOperationPool)

app.use("/api/blog",blogPool)



app.listen(port,()=>{
    console.log("server is listen");
})
