

import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const Update = () => {
  const location=useLocation()
  const user=location.state.user
  const data=location.state.e
  console.log(data.blog_title,"from all");
  const [blog_title, setBlogTitle] = useState(data.blog_title);
  const [blog_description, setBlogDescription] = useState(data.blog_description);
  const [file, setFile] = useState(null);
//   const [blog_image, setBlogImage] = useState(''); 
  const [user_name, setUserName] = useState('')
   const handleFileChange = (e) => {
    const selectedFile = e.target.files[0]
    setFile(selectedFile)
  }
  const uploadImage =  () => {
    const form = new FormData()
    form.append('file',file)
    form.append('upload_preset', 'assilelabed')
    // try {
    //     const response = await axios.post(`https://api.cloudinary.com/v1_1/dmv4km71s/upload`,form)
    //     console.log(response,"response");
    //     console.log(response.data.secure_url,"response url");
    //     const url = response.data.secure_url
    //     return url
    // } catch(error){
    //     console.log(error);
    // }
   return  axios.post(`https://api.cloudinary.com/v1_1/dmv4km71s/upload`,form).then((response)=>response.data.secure_url).catch((err)=>console.log(err))
  }
  const handelSubmit =(e) =>{
    e.preventDefault()
    const ImageUrl = uploadImage()
    const obj = {
    blog_title : blog_title,
    blog_description : blog_description,
    blog_image : ImageUrl
        }
        console.log(obj,"obj");
    axios.put(`http://localhost:3001/api/blog/update/${user_name}`,obj).then((res)=>{
        
        console.log(res.data);
    }).catch((err)=>{
        console.log(err);
    })
  }
  return (
        <div className="bg-white border rounded-lg">
    <h2 className='mt-1 font-semibold text-lg leading-tight'>Update Blog</h2>
    <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
      <div className="md:flex md:items-center mb-6">
        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="name">Name:</label>
        {/* <input
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /> */}
      </div>
      <div className="md:flex md:items-center mb-6">
        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="title">Title:</label>
        <input
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
          type="text"
          id="title"
        value={blog_title}
          onChange={(e) => setBlogTitle(e.target.value)}
        />
      </div>
      <div className="md:flex md:items-center mb-6">
        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="description">Description:</label>
        <textarea
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
          id="description"
          cols="30"
          rows="10"
         value={blog_description}
          onChange={(e) => setBlogDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="md:flex md:items-center mb-6">
        <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="image">Image:</label>
        <input
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
        />
        {/* <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='button' onClick={upload}>Upload</button> */}
        {/* {image && <img src={image} alt="Uploaded Preview" />} */}
      </div>
      <p>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button' onClick={(e)=>handelSubmit(e)}>Submit</button>
      </p>
    </form>
  </div>

  )
}
export default Update