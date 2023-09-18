import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (file) {
      upload();
    }
  }, [file]);

  const upload = async () => {
    try {
      const form = new FormData();
      form.append('file', file);
      form.append('upload_preset', 'assilelabed');

      const result = await axios.post(
        'https://api.cloudinary.com/v1_1/dmv4km71s/upload',
        form
      );

      // Set the Cloudinary image URL in the state
      setUrl(result.data.secure_url);
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (url) {
        await axios.post('http://localhost:3001/api/blog/api/createblog', {
          user_name: name,
          blog_title: title,
          blog_description: description,
          blog_image: url,
        });
        
        console.log('Blog created successfully.');
        navigate('/getall');
      } else {
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <div className="bg-white border rounded-lg">
      <h2 className='mt-1 font-semibold text-lg leading-tight'>Add New Blog</h2>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <div className="md:flex md:items-center mb-6">
          <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="name">Name:</label>
          <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="md:flex md:items-center mb-6">
          <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="title">Title:</label>
          <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="text"
            id="title"
            placeholder="Your blog title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="md:flex md:items-center mb-6">
          <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="description">Description:</label>
          <textarea
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            id="description"
            cols="30"
            rows="10"
            placeholder="Express yourself"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="md:flex md:items-center mb-6">
          <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' htmlFor="image">Image:</label>
          <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name'
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type='button' onClick={upload}>Upload</button>
          {url && <img src={url} alt="Uploaded Preview" />}
        </div>
        <p>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button' onClick={handleSubmit}>Submit</button>
        </p>
      </form>
    </div>
  );
}

export default Add;
