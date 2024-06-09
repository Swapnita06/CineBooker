// import axios from 'axios';

// export const getAllMovies = async()=>{
// const res = await axios
// .get("http://localhost:5000/movie")
// .catch(err => console.log(err));

// if(res.status!==200){
//     return console.log("No data");
// }

// const data = await res.data;
// return data;
// }

//     export const sendUserAuthRequest = async(data,signup)=>{
//     const res = await axios
//     .post(`http://localhost:5000/user/${signup ? "signup":"login"}`,{
//         name: signup?data.name: "",
//         email:data.email,
//         password : data.password
//     }).catch((err)=>console.log(err));

//     if(res.status!==200 && res.status!==201){
//         console.log("unexpected error occured");
//     }

//     const resData = await res.data;
//     return resData;
// }




// export const sendAdminAuthRequest = async(data)=>{
//     const res = await axios
//     .post("/admin/login",{
//         email:data.email,
//         password:data.password,
//     })
//     .catch((err)=>console.log(err));

//     if(res.status!==200){
//         return console.log("Unexpected error ocured");
//     }
//     const resData = await res.data;
//     return resData;
// }




import axios from 'axios';

// Function to get all movies
export const getAllMovies = async () => {
  try {
    const res = await axios.get("http://localhost:5000/movie");
    if (res.status !== 200) {
      return console.log("No data");
    }
    const data = await res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}

// Function to send user authentication request  demo@demo.com   
export const sendUserAuthRequest = async (data, signup) => {
  try {
    const requestData={
      email: data.email,
      password: data.password
    };

    if (signup) {
        requestData.name = data.name;
      }
  
      const res = await axios.post(`http://localhost:5000/user/${signup ? "signup" : "login"}`, requestData);
  

    if (res.status !== 200 && res.status !== 201) {
      console.log("Unexpected error occurred");
    }
    //const resData = await res.data;
    return res.data;
  } catch (err) {
    if (err.response) {
        // Log details about the response if available
        console.log("Error response data:", err.response.data);
        console.log("Error response status:", err.response.status);
        console.log("Error response headers:", err.response.headers);
      } else if (err.request) {
        // The request was made but no response was received
        console.log("Error request data:", err.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log('Error', err.message);
      }
  }
}

// Function to send admin authentication request
export const sendAdminAuthRequest = async (data) => {
  try {
    const res = await axios.post("http://localhost:5000/admin/login", {
      email: data.email,
      password: data.password,
    });
    if (res.status !== 200) {
      return console.log("Unexpected error occurred");
    }
    const resData = await res.data;
    return resData;
  } catch (err) {
    console.log(err);
  }
}


export const getMovieDetails = async(id)=>{
  const res = await axios
  .get(`http://localhost:5000/movie/${id}`)
  .catch(err=>console.log(err));
if(res.status!==200){
  return console.log("Unexpected Error");
}
const resData = await res.data;
return resData;
}


// export const newBooking = async(data)=>{
//   const res = await axios
//   .post("http://localhost:5000/booking",{
//     movie: data.movie,
//     seatNumber: data.seatNumber,
//     date: data.date,
//     user:localStorage.getItem("userId"),
//   })
//   .catch((err)=>console.log(err));

//   if(res.status!==201){
//     return console.log("Unexpected Error");
//   }
//   const resData = await res.data;
//   return resData;
// }

export const newBooking = async (data) => {
  try {
    const res = await axios.post("http://localhost:5000/booking", {
      movie: data.movie,
      seatNumber: data.seatNumber,
      date: data.date,
      user: localStorage.getItem("userId"),
    });

    if (res.status !== 201) {
      return console.log("Unexpected Error");
    }

    return res.data;
  } catch (err) {
    if (err.response) {
      console.log("Error response data:", err.response.data);
      console.log("Error response status:", err.response.status);
      console.log("Error response headers:", err.response.headers);
    } else if (err.request) {
      console.log("Error request data:", err.request);
    } else {
      console.log('Error', err.message);
    }
  }
};


export const getUserBooking = async()=>{
  const id = localStorage.getItem("userId");
  const res = await axios
  .get(`http://localhost:5000/user/bookings/${id}`)
  .catch((err)=> console.log(err));

  if(res.status!==200){
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
  
};


export const  deleteBooking = async(id)=>{
  const res = await axios
  .delete(`http://localhost:5000/booking/${id}`)
  .catch((err)=>console.log(err));

  if(res.status!==200){
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
  
}

export const getUserDetails = async()=>{
  const id = localStorage.getItem("userId");
  const res = await axios
  .get(`http://localhost:5000/user/${id}`)
  .catch((err)=>console.log(err));

  if(res.status!==200){
    return console.log("Unexpected Error");
  }
  const resData = await res.data;
  return resData;
}

export const addMovie = async(data)=>{
  const res = await axios
  .post("http://localhost:5000/movie",{
    title:data.title,
    description: data.description,
    releaseDate: data.releaseDate,
posterUrl:data.posterUrl,
featured: data.featured,
actors:data.featured,
actors:data.actors,
admin:localStorage.getItem("adminId"),
  },{
    headers:{
      Authorization: `Bearer ${localStorage.getItem("token")}`,

    },
 }
).catch(err=>console.log(err));

if(res.status!==201){
  return console.log("Unexpected Error");
}
const resData = await res.data;
return resData;
}