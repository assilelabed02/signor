const connection = require('../connection');
const getAllUsers =()=>{
    const sql ='SELECT * FROM user'
    const promise = new Promise((resolve,reject)=>{
        connection.query(sql,(err,result)=>{
            console.log(err);
            result ? resolve(result) : reject(err)
        })
    })
    return promise
 }

 const getUserById = (id)=> {
    const sql = " SELECT * FROM user WHERE id =?"
    const promise = new Promise((resolve,reject)=>{
        connection.query(sql,[id],(err,result)=>{
            result ? resolve(result) : reject(err)
        })
    })
    return promise
 }

 module.exports.getAllUsers = getAllUsers
 module.exports.getUserById = getUserById
