import React, { Fragment, useEffect, useState } from 'react'
import { getUserBooking } from '../api-helpers/api-helpers'
import { Box, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';

const Profile = () => {
    const[bookings,setBookings]=useState()
   
   
    useEffect(()=>{
    getUserBooking()
    .then((res)=>setBookings(res.bookings))
    .catch((err)=> console.log(err));
   },[])
  console.log(bookings);


  console.log(bookings);

  return(

<Box width={"100%"} display={"flex"}>
{bookings && bookings.length>0 &&( 
<Fragment>
{" "}
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
    Name: {bookings[0].user.name}
</Typography>

<Typography padding={1} width={'auto'}
textAlign={'center'}
border={'1px solid #ccc'}
borderRadius={6}
>
    Email: {bookings[0].user.email}
</Typography>


</Box>
<Box width={'70%'}></Box>
</Fragment>
)}
</Box>
  );
};

export default Profile
