import React, { Fragment, useEffect, useState } from 'react'
import { deleteBooking, getUserBooking, getUserDetails } from '../api-helpers/api-helpers'
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';


const Profile = () => {
    const[bookings,setBookings]=useState([]);
   const[user,setUser]= useState();
   
    useEffect(()=>{
    getUserBooking()
    .then((res)=> 
      setBookings(res.bookings))
    .catch((err)=> console.log(err));

getUserDetails()
.then((res)=>setUser(res.user))
.catch(err=>console.log(err));
 },[])
  



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
   {/*Name: {booking.user ? booking.user.name : 'Unknown'}*/}
</Typography>

<Typography padding={1} width={'auto'}
textAlign={'center'}
border={'1px solid #ccc'}
borderRadius={6}
>
   Email: {user.email} 
    {/* Email: {booking.user ? booking.user.email : 'Unknown'}*/ }
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
    bookings.map((booking,index)=>(
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
Movie: {booking.title}
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
    ))
  }
</List>
  </Box>
</Box>
)}
</Fragment>

</Box>
  );
};

export default Profile
