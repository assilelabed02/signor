const connection = require('../connection');
const getAllUsers =()=>{
    const sql ='SELECT * FROM user_model'
    const promise = new Promise((resolve,reject)=>{
        connection.query(sql,(err,result)=>{
            console.log(err);
            result ? resolve(result) : reject(err)
        })
    })
    return promise
 }

 const createUser = (user_id,user_name,user_pseudoName,user_age,user_gender,user_profilePicture)=>{
    const sql = "INSERT INTO user_model set ?"
    const promise = new Promise((resolve,reject)=>{
        connection.query(sql,[user_id,user_name,user_pseudoName,user_age,user_gender,user_profilePicture],(err,result)=>{
            err ? reject(err) : resolve(result)
        })
    })
    return promise
 }

 module.exports.getAllUsers = getAllUsers
 module.exports.createUser = createUser