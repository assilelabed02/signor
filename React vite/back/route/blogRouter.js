const express = require('express');
const router = express.Router();
const modelContr = require("../conroller/blogController")

router.get("/getallblogs",modelContr.getAll)

router.get("/getbyid/:id",modelContr.getById)

router.put("/update/:id",modelContr.update)

router.delete("/delete/:id",modelContr.Delete)

router.post('/post',modelContr.add)

module.exports = router
