import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllMovies } from '../api-helpers/api-helpers';
import MovieItem from '../components/Movies/MovieItem';

const Movies = () => {
  const [movies,setMovies] = useState();


  useEffect(()=>{
 getAllMovies()
 .then((data)=>{
  if (data && data.movies) {

    const validMovies = data.movies.filter(movie => movie._id);
    setMovies(validMovies);
   // setMovies(data.movies);
  }
  else {
    console.error('Movies data is not in the expected format', data);
  }
})
 .catch((err)=>console.log('Failed to fetch movies',err));
  },[]);
  return (
    <Box margin={'auto'} marginTop={4}>
   <Typography
    variant='h3'
     padding={2}
      textAlign={"center"}

      >MOVIES
      </Typography>
      <Box width={'100%'} margin ='auto'
      marginTop={5}
      display={'flex'} 
      justifyContent="flex-start" flexWrap={"wrap"}
      >
{movies && movies.map((movie,index)=>(
 
<MovieItem
 key={index} 
 id={movie._id} 
 posterUrl={movie.posterUrl}
  releaseDate={movie.releaseDate} 
  title={movie.title}
  />

))}
      </Box>
    </Box>
  )
}

export default Movies
