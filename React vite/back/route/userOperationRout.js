const express = require('express');
const router = express.Router();
const userOperationCntr = require("../controller/userOperationCntr")

router.get("/getall",userOperationCntr.getAll)
router.get("/getone/:id",userOperationCntr.getOne)

module.exports = router