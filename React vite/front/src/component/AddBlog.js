// import  {React, useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'; 

// function Add() {
//     const [name,setName] = useState('')
//     const [title , setTitle] = useState("")
//     const [description,setDescription] = useState('')
//     const [image,setImage] = useState('')
//     const [file,setFile]= useState(null)
//     const [url,setUrl] = useState("")

//     const upload = async ()=>{
//         const form = new FormData()
//         form.append('file',file)
//         form.append("upload_preset","assilelabed")
     
//     }
//        try{
//         const result =  axios.post("http://api.cloudinary.com/v1_1/dmv4km71s/upload",form)
//         .then((result)=>{setUrl(result.data.secure_url[0])})
//         setUrl(result.data.secure_url);
//        }
//        catch(error){
//         console.error(error);

//        }
    

//     const navigate = useNavigate()
    
// const HandleSubmit = (e) =>{
//     e.preventDefault() 
//     axios.post('http://localhost:3001/api/blog/api/createblog',{
//         user_name:name,
//         blog_title : title,
//         blog_description:description,
//        blog_image:url,
//     }).then((res)=>{
//         console.log(res.data);
//     }).catch((err)=>{
//         console.log(err);
//     })
//     navigate()
// }

//   return (
//     <div className="add-container">
//     <h2>Add New Blog</h2>
//     <form >
// <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           placeholder="Enter card name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//  <div className="form-group">
//         <label htmlFor="image">Title:</label>
//         <input
//           type="text"
//           id="title"
//           placeholder="your blog title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="description">Description:</label>
//         <textarea
//           id="description"
//           cols="30"
//           rows="10"
//           placeholder="express yourself"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         ></textarea>
//       </div>
//       <div className="form-group">
//         <label htmlFor="price">Image:</label>
//         <input
//           type="file"
//           id="price"
//           placeholder="your image url goes here"
//           value={file}
//           onChange={(e) => setFile(e.target.files)}
//         />
//         <button onClick={upload}/>
//         {url && <img src={url} alt="Uploaded Preview" />}      </div>
//       <p>
//       <button onClick={HandleSubmit} />
//       <Link to="/getall" className="blogs"/>
//       </p>
   
//     </form>
//   </div>

//   )
// }

// export default Add