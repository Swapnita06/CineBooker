import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Movies from './components/Movies/Movies'
import Admin from './components/Admin/Admin'
import Auth from './components/Auth/Auth'

const App = () => {
  return (
    
    <div>
      <BrowserRouter>
      <Navbar/>
      <section>
        <Routes>
          <Route path ="/" element ={Homepage}/>
          <Route path ="/movies" element ={Movies}/>
          <Route path ="/admin" element ={Admin}/>
          <Route path ="/auth" element ={Auth}/>
        </Routes>
        </section>
        </BrowserRouter>
    </div>
   
  )
}

export default App


