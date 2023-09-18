import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Add from './component/AddBlog';
import GetAllBlogs from './component/GetAllBlogs';
import Add from "./component/Add"
import Login from './component/Login';
import SignUp from './component/Signup';
import { Navbar } from './component/Navbar';
import Update from './component/Update';
import Profile from './component/Profile';


 function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/profile' element={<Profile/>}></Route>
<Route path='/update' element={<Update/>}></Route>
<Route path='/navbar' element={<Navbar/>}></Route>
<Route path='/auth/register' element={<SignUp/>}></Route>
<Route path='/' element={<Login/>}/>
<Route path='/getall' element={<GetAllBlogs/>}/>
<Route path='/add'  element={<Add/>}/>
</Routes>
   
</BrowserRouter>

  
  );
}

export default App
