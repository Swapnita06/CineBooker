import React from 'react'

import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Movies from './pages/Movies'
import Admin from './pages/Admin'
import Auth from './pages/Auth'
import Nav from './components/Nav'
import Newnavbar from './components/Newnavbar'

const App = () => {
  return (
    
    <div>
      <BrowserRouter>
      <Newnavbar/>
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


