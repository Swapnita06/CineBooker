import React, { useEffect } from 'react'

import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Movies from './pages/Movies'
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Nav from './components/Nav'
import Newnavbar from './components/Newnavbar'
import Navbar from './components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { adminActions, userActions } from './store'
import Booking from './pages/Booking'
import Profile from './pages/Profile'
import AddMovie from './components/Movies/AddMovie'
import AdminProfile from './pages/AdminProfile'

const App = () => {

  const dispatch = useDispatch();
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
console.log("isAdminLoggedIn",isAdminLoggedIn);
console.log("isUserLoggedIn",isUserLoggedIn);
useEffect(()=>{ 
  if(localStorage.getItem("userId")){
dispatch(userActions.login());
  }else if(localStorage.getItem("adminId")){
dispatch(adminActions.login());
  }
},[])


  return (
    
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path ="/" element ={<Homepage/>}/>
          <Route path ="/movies" element ={<Movies/>}/>
          <Route path ="/admin" element ={<Admin/>}/>
          <Route path ="/auth" element ={<Auth/>}/>
          <Route path ="/user" element ={<Profile/>}/>
          <Route path ="/add" element ={<AddMovie/>}/>
          <Route path ="/user-admin" element ={<AdminProfile/>}/>
          <Route path="/booking/:id" element={<Booking/>}/>
        </Routes>
        </BrowserRouter>
    </div>
   
  )
}

export default App


