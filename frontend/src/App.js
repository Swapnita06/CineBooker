import React from 'react'

import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Movies from './pages/Movies'
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Nav from './components/Nav'
import Newnavbar from './components/Newnavbar'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'

const App = () => {

  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
console.log("isAdminLoggedIn",isAdminLoggedIn);
console.log("isUserLoggedIn",isUserLoggedIn);

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


