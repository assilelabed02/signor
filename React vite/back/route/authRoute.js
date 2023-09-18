const express = require('express');
const router = express.Router();
const userCntr = require("../controller/userCtrl")

router.post("/register",userCntr.create)

router.post("/login",userCntr.confirme)


module.exports = router