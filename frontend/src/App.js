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
        </Routes>
        </BrowserRouter>
    </div>
   
  )
}

export default App


