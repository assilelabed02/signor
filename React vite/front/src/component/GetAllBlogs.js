import React, { useState, useEffect } from "react";
import axios from "axios";
import { TOKEN } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";
import Profile from "./Profile";
// import "./Card.css"
// import { useNavigate } from "react-router-dom";

function GetAllBlogs() {
  const [data, setData] = useState([]);
  const location = useLocation()
  const user = location.state?.name
  console.log(user,"user");
  const navigate = useNavigate()
  // const navigate = useNavigate()
  const token = localStorage.getItem(TOKEN);
  let headers = { authorization: token };

  const fetchData = () => {
    axios
      .get("http://localhost:3001/api/blog/getall", {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data, "data");
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handelUpdate = () =>{
      navigate("/",{state:{user:user , data:data}})
  }

  console.log(data);

  return (
    
    <form className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    <div className="my-4 block text-gray-700 text-center bg-gray-500 px-4 py-2">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flow-root bg-blue-500">
      {data.map((e, i) => {
        return (
       
          <div className="flex-1  text-gray-700 text-center bg-gray-100 px-4 py-2 m-2">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name" ></label>
          <input 
         className="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
         value={e.user_name}
         placeholder="Name : "></input>
          
            <br />
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name"> </label>
            <input
              className="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
              value={e.blog_title}
              placeholder="Title : "
            ></input>
             <br/>
             <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
            </label>
            <input
            className="bg-white-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            value={e.blog_description}
              placeholder="Description : "
            ></input>
            <img className="bg-gold-500 p-4 h-48 w-200 object-cover inline" alt=""id="my-image" src={e.blog_image} />
            <br/>
            
            {/* <p>
              {" "}
              <small> Title : {e.blog_image} </small>{" "}
            </p> */}
            {/* <button id="update" onClick={handelUpdate}> update </button> */}
            {/* <div className="md:flex md:items-center"> 

            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' "> delete </button>
            <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded' " onClick={()=>navigate("/",{state:{user:user , e:e}})}> update</button>
            </div> */}
          </div>
        );
      
      })}
      </div>
   </form>
    </div>
    </form>
  );
}

export default GetAllBlogs;
