const{getAllUsers,createUser}= require("../database/model/userModel")

async function getall (req,res){
    getAllUsers()
    .then((response)=>{
      res.status(200).json(response)
    })
    .catch((err)=>res.status(500).send(err))
  }

  async function add (req,res){
    try {
      const userData = req.body; 
      const newData = await createUser(userData);
      res.status(201).send(newData);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  module.exports = {getall,add}