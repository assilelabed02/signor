import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
 import axios from "axios";

// import './SignUp.css';

function SignUp() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/auth/register',formData)
    .then((response)=>{
      if(response.data.token){
       navigate('/auth/login');
      }
      // window.location.reload(false);
      else{
        console.log("error");
      }
    })
    .catch((error)=>console.log('Failed to add',error))
  }

  return (
    <div class="flex items-center border-b border-teal-500 py-2">

    <form class="w-full max-w-lg">
    <div className="flex items-center border-b border-teal-500 py-2">
      <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for="inline-full-name">Username</label>
      <input
      className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        type="text"
        name="name"
        placeholder="Name"
        required
        value={formData.name}
        onChange={handleInputChange}
      />
      </div>
      <br />
      <div className="flex items-center border-b border-teal-500 py-2">

      <label className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for="inline-full-name">Email</label>
      <input
       className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        type="email"
        name="email"
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleInputChange}
      />
            </div>

      <br />
      <div className="flex items-center border-b border-teal-500 py-2">

      <label  className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4' for="inline-full-name">Password</label>
      <input
        className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        type="password"
        name="password"
        placeholder="Password"
        required
        value={formData.password}
        onChange={handleInputChange}
      />
            </div>

      <br />
   <button className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' onClick={handleSignUp}>Sign Up</button>
    </form>
    </div>
  );
}

export default SignUp;
