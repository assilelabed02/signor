import React, {useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function Profile (props){
    const [data,setData]=useState([])
     const {user} = props
    const location=useLocation()
     const userName=location.state.user.name
    console.log(userName,"props");
 useEffect(()=>{
    axios.get(`http://localhost:3001/api/blog/getbyname/${userName}`)
    .then((res)=>{
         setData(res.data)
     })
    .catch((err)=>console.log(err))
 },[])
 console.log(user," = user",userName,"= name");
    return (
<div>
      {user ? (
        <>
          <p>Name: {user.userName}</p>
          <p>Email: {user.email}</p>
          
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
    )
}