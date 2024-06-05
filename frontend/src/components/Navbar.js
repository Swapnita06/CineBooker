import React, { useEffect, useState } from 'react'
import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { getAllMovies } from '../api-helpers/api-helpers';
import { Link } from 'react-router-dom';


const Navbar = () => {
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
<Tab component={Link} to="/admin" label="Admin" />
<Tab component={Link} to="/auth" label="Auth" />
</Tabs>
        </Box>
    </Toolbar>
</AppBar>
  )
}

export default Navbar
