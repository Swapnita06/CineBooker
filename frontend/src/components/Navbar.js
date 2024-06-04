import React, { useEffect, useState } from 'react'
import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { getAllMovies } from '../api-helpers/api-helpers';

const dummyArray=["movie1"," movie2", "movie3"]
const Navbar = () => {
 const [value,setValue]= useState(0);

 const[movies,setMovies]= useState([])
 useEffect(()=>{
    getAllMovies()
    .then((data)=>setMovies(data.movies))
    .catch((err)=> console.log(err));
 },[])
  return (
<AppBar sx ={{bgcolor:"#070F2B"}}>
    <Toolbar>
        <Box width={'20%'}>
<MovieCreationIcon/>
        </Box>
        <Box width={'30%'} margin={"auto"}>
        <Autocomplete
        freeSolo
        options={movies && movies.map((option) => option.title)}
        renderInput={(params) =>(
             <TextField sx ={{input:{color:"white"} }}
             variant='standard' {...params} 
             placeholder="Search Movies" />)}
      />
        </Box>
        <Box display={'flex'}>
<Tabs textColor='inherit' indicatorColor='white' value={value} onChange={(e,val)=>setValue(val)}>
<Tab label="Movies"/>
    <Tab label="Admin"/>
    <Tab label="Auth"/>
</Tabs>
        </Box>
    </Toolbar>
</AppBar>
  )
}

export default Navbar
