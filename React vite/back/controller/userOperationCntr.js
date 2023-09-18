const {getAllUsers,getUserById} = require("../database/model/userOperation")

async function getAll (req,res){
    getAllUsers()
    .then((response)=>{
      res.status(200).json(response)
    })
    .catch((err)=>res.status(500).send(err))
  }

  async function getOne (req,res){
    getUserById(req.params.id)
    .then((response)=>{
        res.status(200).json(response)
    }).catch(err=>res.status(500).send(err))
  }

  module.exports.getAll = getAll
  module.exports.getOne = getOne
