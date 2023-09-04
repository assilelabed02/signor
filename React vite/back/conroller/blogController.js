const {getAllBlogs,getBlogById, updateBlog, deleteBlog, addBlog} = require("../database/model/blogModel")

async function getAll (req,res){
 getAllBlogs()
 .then((response)=>{
   res.status(200).json(response)
 })
 .catch((err)=>res.status(500).send(err))
}

async function getById (req,res){
  getBlogById(req.params.id)
  .then((response)=>{
    res.status(200).json(response)
}).catch(err=>res.status(500).send(err))
}

function update (req,res){
  // try {
  //   const blog_id = req.params.id;
  //   const newData = req.body;
  //   const updated = updateBlog(blog_id,newData);
  //   if (updated) {
  //     res.status(200).json({ message: 'Blog updated successfully' });
  //   } else {
  //     res.status(404).json({ error: 'Blog not found' });
  //   }
  // } catch (error) {
  //   res.status(500).json(error);
  // }
updateBlog(req.params.id,req.body,(err,result)=>{
  console.log(req.params.id);
  if(err) res.status(500).json(err)
  else res.status(200).json({ message: 'Blog updated successfully' , result})
})
}

async function Delete (req,res){
  try {
    const blog_id = req.params.id;
    const deleted = await deleteBlog(blog_id);
    if (deleted) {
      res.status(200).json({ message: 'Blog deleted successfully' });
    } else {
      res.status(404).json({ error: 'Blog not found' });
    }
  } catch (error) {
    res.status(500).json( error);
  }
}

async function add (req,res){
  try {
    const blogData = req.body; 
    const newBlog = await addBlog(blogData);
    res.status(201).send(newBlog);
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports ={getAll,getById,update,Delete,add}