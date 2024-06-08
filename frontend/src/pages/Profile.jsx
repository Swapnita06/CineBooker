import React, { useEffect, useState } from 'react'
import { getUserBooking } from '../api-helpers/api-helpers'

const Profile = () => {
    const[bookings,setBookings]=useState()
   useEffect(()=>{
    getUserBooking()
    .then((res)=>setBookings(res.bookings))
    .catch((err)=> console.log(err));
   },[])
  console.log(bookings);
  return <div>Profile</div>
}

export default Profile
