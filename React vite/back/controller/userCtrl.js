const {createUser,confirmCreation} = require("../database/model/userAuth")

async function create (req,res){
  // createUser(req.body.name,req.body.email,req.body.password);
  try {
    const loginPayload = req.body;
    const newUser = await createUser(loginPayload);
    console.log('newUser=========',newUser);
    res.status(201).send(newUser);
  } catch (error) {
        res.status(500).json(error);
      }
}

async function confirme (req,res){
    try {
        return confirmCreation(req, res); 
      } catch (error) {
        res.status(500).json(error);
      }
}


module.exports.confirme = confirme
module.exports.create = create