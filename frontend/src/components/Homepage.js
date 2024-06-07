import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import Typography from '@mui/material/Typography'
import { Box, Button} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { getAllMovies } from '../api-helpers/api-helpers';

import MovieItem from './Movies/MovieItem'

const Homepage = () => {
const [movies,setMovies]= useState([]);
useEffect(()=>{
getAllMovies().then((data)=>setMovies(data.movies))
.catch((err)=>console.log(err));
},[])
console.log(movies);
  return (
    <>
    <div>
      <Carousel/>
  </div>
  <Box padding ={5} margin ="auto">
<Typography variant="h3" textAlign={"center"}>Latest Releases</Typography>
  </Box>
  <Box display="flex" width="80%" justifyContent={"center"}
  flexWrap={'wrap'}
  >
    { movies && 
    movies.slice(0,8)
    .map((movie,index)=><MovieItem id={movie.id} title ={movie.title} posterUrl={movie.posterUrl} releaseDate={movie.releaseDate} key={index}/>)}
  </Box>
  <Box display="flex" padding={5} margin={"auto"}>
<Button component={RouterLink} to="/movies" variant='outlined' sx={{margin:"auto", color:"#2b2d42"}}>
View All Movies
</Button>
  </Box>
  </>
  )
}

export default Homepage
