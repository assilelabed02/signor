import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Profile from "./Profile";
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(""); 
  const [form, setForm] = useState({ email: "", password: "" });
  const [error,setError] = useState(null)
  

  const handleFormChange = (event) => {

    setForm((pervValue) => {
      let form = { email: "", password: "" };
      if (event.target.type === "password") {
        form = { ...pervValue, password: event.target.value };
      }
      if (event.target.type === "email") {
        form = { ...pervValue, email: event.target.value };
      }
      return form;
    });;
  };

  const handleLogin = async  (e) => {
    e.preventDefault()
    try {
      
      const response = await axios.post("http://localhost:3001/api/auth/login", form);
      if (response.data && response.data.data.token) {
        // Authentication successful
        console.log(response,"response");
        const userData = response.data.data
        localStorage.setItem("token", response.data.data.token);
        setUser(userData)
        console.log("User data received:", user);
        navigate('./')
         // Debugging
        // navigate("/getall", { state: { name: response.data.data.name } });
        navigate("/profile",{state:{user:userData}})
      } else {
        setError(error);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while logging in.");
    }
  //   const token = localStorage.getItem(TOKEN);
  //   let headers = { authorization: token };
  //   let auth = await axios.post("http://localhost:3001/api/auth/login", form, {
  //     headers: headers,
  //   });
  //   if (auth.data.data.token) {
  //     localStorage.setItem(TOKEN, auth.data.data.token);
  //   }
  //   navigate("/getall",{state:{name:auth.data.data.name}});
     
  // };
  // const handleNavigate = () => {
  //   navigate("/");
  };
  return (
    <div className="flex items-center border-b border-teal-500 py-2"> 

     <form className="w-full max-w-lg"> 

    <div className="flex items-center border-b border-teal-500 py-2">
      
      <label className="text-sm lg:flex-grow">Email  </label>
      <input
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="email"
        placeholder="Enter Your Email"
        required
        value={form.email}
        onChange={handleFormChange}
      />
          </div>

      <br />
      <div className="flex items-center border-b border-teal-500 py-2">

      <label className="text-sm lg:flex-grow">Password  </label>
      <input
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="password"
        placeholder="Enter Your Password"
        required
        value={form.password}
        onChange={handleFormChange}
      />
                </div>

      <br />
      <div className="flex items-center border-b border-teal-500 py-2">

      <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" onClick={handleLogin}>Send</button>
      
    </div>
    <div> <Profile user={user}/> </div>
    </form>
    </div>
  );
}
export default Login;
