import React, { Fragment, useEffect, useState } from 'react'
import {  getAdminById, getMovieDetails} from '../api-helpers/api-helpers'
import { Box,  List, ListItem, ListItemText, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';


const AdminProfile = () => {
    const[admin,setAdmin]= useState();
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
getAdminById()
.then((res)=>{
    console.log(res);
    console.log(res.admin.addedMovies);
    setAdmin(res.admin)
})
.catch(err=>console.log(err));
 },[])
  

 useEffect(() => {
    if (admin && admin.addedMovies.length > 0) {
      const fetchMovies = async () => {
        const movieDetails = await Promise.all(admin.addedMovies.map((movieId) => getMovieDetails(movieId)));
        setMovies(movieDetails);
      };

      fetchMovies();
    }
  }, [admin]);

  return(

<Box width={"100%"} display={"flex"}>

<Fragment >
{" "}
{admin && (
<Box flexDirection={'column'} 
justifyContent ="center"
width={"30%"}
alignItems={"center"}
>
<PersonIcon sx={{fontSize:"10rem"}}/>

<Typography padding={1} width={'auto'}
textAlign={'center'}
border={'1px solid #ccc'}
borderRadius={6}
>
   Email: {admin.email} 
    {/* Email: {booking.user ? booking.user.email : 'Unknown'}*/ }
</Typography>
</Box>
)}

{/*{admin && admin.addedMovies.length>0 &&*/}
{movies.length > 0 &&
(
<Box width={'70%'}
display={"flex"}
flexDirection={"column"}
>
  <Typography variant='h2' fontFamily={"verdana"}
  textAlign={"center"}
  padding={2}
  >
Added Movies
  </Typography>
  <Box margin={'auto'} display={"flex"}
flexDirection={"column"}
width={"80%"}
>
<List>
  {/* {
    // admin.addedMovies.map((movie,index)=>(} */}
        {movies.map((movie, index) =>{
            console.log(movie);
        return (
      <ListItem
      sx={{bgcolor:"#00d386",
        color:"white",
        textAlign:"center",
        margin:1,
      }}
      >
<ListItemText
sx={{margin:1,
  width:'auto',
  textAlign:"left"
}}
>
{console.log(movie)}
Movie: {movie.movie.title}
</ListItemText>

      </ListItem>
    );
        })}
</List>
  </Box>
</Box>
)}
</Fragment>

</Box>
  );
};

export default AdminProfile
