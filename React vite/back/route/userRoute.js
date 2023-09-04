const express = require('express');
const router = express.Router();
const userCntrl = require("../conroller/userController")

router.get("/getall",userCntrl.getall)

router.post('/post',userCntrl.add)

module.exports = router;
