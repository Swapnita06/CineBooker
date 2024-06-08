import React, { useEffect, useState } from 'react'
import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import { adminActions, userActions} from "../store"


const Navbar = () => {
const dispatch = useDispatch()
  const isAdminLoggedIn = useSelector((state)=>state.admin.isLoggedIn);
  const isUserLoggedIn = useSelector((state)=>state.user.isLoggedIn);
 const [value,setValue]= useState(0);
const[movies,setMovies]= useState([]);

//  useEffect(()=>{
//     getAllMovies()
//     .then((data)=>setMovies(data.movies))
//     .catch((err)=> console.log(err));
//  },[])

useEffect(() => {
  getAllMovies()
      .then((data) => {
          if (data && data.movies) {
              setMovies(data.movies);
          } else {
              console.log("No movies found");
          }
      })
      .catch((err) => console.error("Error fetching movies:", err));
}, []);

const logout = (isAdmin)=>{
dispatch(isAdmin?adminActions.logout():userActions.logout())
}

  return (
<AppBar position="sticky" sx ={{bgcolor:"#070F2B",zIndex:'100'}}>
    <Toolbar>
        <Box width={'20%'}>
<MovieCreationIcon/>
        </Box>
        <Box width={'30%'} margin={"auto"}>

        <Autocomplete
        freeSolo
        options={movies.map((option) => option.title)}
        renderInput={(params) =>(
             <TextField sx ={{input:{color:"white"} }}
             variant='standard' {...params} 
             placeholder="Search Movies" />)}
      />
        </Box>
        <Box display={'flex'}>
<Tabs textColor='inherit' indicatorColor='white' value={value} onChange={(e,val)=>setValue(val)}>
<Tab  component={Link} to="/movies" label="Movies" />
{!isAdminLoggedIn && !isUserLoggedIn &&(<>

  <Tab component={Link} to="/admin" label="Admin" />
  <Tab component={Link} to="/auth" label="Auth" /> 

</>
)}
{isUserLoggedIn && (<>
  <Tab component={Link} to="/user" label="Profile" />
  <Tab  onClick={()=>logout(false)}
   component={Link} to="/" label="Logout" /> 

</>
)}

{isAdminLoggedIn && (
  <>
  <Tab component={Link} to="/add" label="Add Movies" />
  <Tab component={Link} to="/admin" label="Profile" />
  <Tab onClick={()=>logout(true)} component={Link} to="/" label="Logout" /> 
  
</>
)}


</Tabs>
        </Box>
    </Toolbar>
</AppBar>
  )
}

export default Navbar
