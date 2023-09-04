const connection = require('../connection');

const getAllBlogs =()=>{
    const sql ='SELECT * FROM blog_model'
    const promise = new Promise((resolve,reject)=>{
        connection.query(sql,(err,result)=>{
            console.log(err);
            result ? resolve(result) : reject(err)
        })
    })
    return promise
 }

 const getBlogById =(blog_id) =>{
     const sql ='SELECT * FROM blog_model WHERE blog_id = ?'
     const promise = new Promise((resolve, reject)=>{
        connection.query(sql,blog_id,(err,results)=>{
     err ? reject(err) : resolve(results)
         });
     })
    
   return promise
  }



 const updateBlog = (id,blog,callback)=> {
    const sql =`UPDATE blog_model SET ? WHERE blog_id =${id}`
       connection.query(sql,blog,(err,result)=>{
        console.log(err);
           callback(err,result)
       })

 }

const deleteBlog = (blog_id)=> {
    var promise = new Promise((resolve,reject)=>{
        connection.query("DELETE FROM blog_model WHERE blog_id = ?",[blog_id],(err,result)=> {
            err ? reject(err) : resolve (result)
        })
     })
    return promise
 }

 const addBlog = (blog_user_name , blog_tiltle ,blog_description)=> {
    const promise = new Promise((resolve,reject)=>{
        connection.query('INSERT INTO blog_model set ?',[blog_user_name , blog_tiltle ,blog_description],
        (err,result)=>{
            err ? reject(err) : resolve(result)
        })
     })
    return promise
}


module.exports.getBlogById = getBlogById
 module.exports.addBlog = addBlog
 module.exports.deleteBlog = deleteBlog
 module.exports.updateBlog = updateBlog
module.exports.getAllBlogs = getAllBlogs

