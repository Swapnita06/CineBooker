import React, { Fragment, useEffect, useState } from 'react'
import { deleteBooking, getMovieDetails, getUserBooking, getUserDetails } from '../api-helpers/api-helpers'
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';


const Profile = () => {
    const[bookings,setBookings]=useState([]);
   const[user,setUser]= useState();
   const [movies, setMovies] = useState({});


    useEffect(()=>{
    getUserBooking()
    .then((res)=> 
      setBookings(res.bookings))
    .catch((err)=> console.log(err));

getUserDetails()
.then((res)=>setUser(res.user))
.catch(err=>console.log(err));


const fetchMovies = async () => {
  const movieIds = bookings.map(booking => booking.movie);
  console.log("Movie IDs:", movieIds);
  const movieDetails = await Promise.all(movieIds.map(movieId => getMovieDetails(movieId)));
  console.log("Movie Details:", movieDetails);
  
  // const moviesObject = movieDetails.reduce((acc, movie) => {
  //   acc[movie._id] = movie;
  //   return acc;
  // }, {});

  const moviesObject = {};
  movieDetails.forEach(movie => {
    moviesObject[movie._id] = movie;
  });

  console.log("Movies Object:", moviesObject);
  setMovies(moviesObject);
};

fetchMovies();
}, [bookings]);


 const handleDelete= (id)=>{
  deleteBooking(id)
  .then((res)=>console.log(res))
.catch(err=>console.log(err));
 }

  return(

<Box width={"100%"} display={"flex"}>

<Fragment >
{" "}
{user && (
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
  Name: {user.name} 
  </Typography>

<Typography padding={1} width={'auto'}
textAlign={'center'}
border={'1px solid #ccc'}
borderRadius={6}
>
   Email: {user.email} 
   </Typography>


</Box>
)}

{bookings && 
(
<Box width={'70%'}
display={"flex"}
flexDirection={"column"}
>
  <Typography variant='h2' fontFamily={"verdana"}
  textAlign={"center"}
  padding={2}
  >
Bookings
  </Typography>
  <Box margin={'auto'} display={"flex"}
flexDirection={"column"}
width={"80%"}
>
<List>
  {
    bookings.map((booking,index)=>{
      const movie = movies[booking.movie];
      
      return (
      <ListItem
      sx={{bgcolor:"#00d386",
        color:"white",
        textAlign:"center",
        margin:1,
      }} key={booking._id}
      >
<ListItemText
sx={{margin:1,
  width:'auto',
  textAlign:"left"
}}
>

 {/* Movie: {booking.movie.title}  */}
 Movie: {movie ? movie.title : "Unknown"} 
</ListItemText>

<ListItemText
sx={{margin:1,
  width:'auto',
  textAlign:"left"
}}
>
Seat: {booking.seatNumber}
</ListItemText>

<ListItemText
sx={{margin:1,
  width:'auto',
  textAlign:"left"
}}
>
Date: {new Date(booking.date).toDateString()}

</ListItemText>

<ListItemText>
  <IconButton onClick={()=>handleDelete(booking._id)} color="error">
    <DeleteIcon />
  </IconButton>
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

export default Profile
