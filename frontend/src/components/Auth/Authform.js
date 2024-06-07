import { Box, Button, Dialog, FormLabel, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

const labelStyle={mt:1,mb:1}

const Authform = () => {

const[inputs,setInputs]= useState({
    name:"",email:"",password:"",
});

const [isSignup,setIsSignup]=useState(false);
 
const handleChange=(e)=>{
    setInputs((prevState)=>({
...prevState,
[e.target.name]:e.target.value,

    }))
};

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
};

  return (
    <Dialog PaperProps={{style:{borderRadius:20}}} open={true}>
        <Box sx ={{m1:"auto",padding:1}}>
<IconButton>
<CloseIcon/>
</IconButton>
        </Box>
        <Typography 
        variant='h3' textAlign={"center"}
        >
           {isSignup? "Signup":"Login"} 
        </Typography>
        <form onSubmit={handleSubmit}>
            <Box display={'flex'} justifyContent={'center'} flexDirection={"column"}
            width={400}
            margin={"auto"}
            alignContent={"center"}
            padding={6}
            >

{ isSignup && ( <>
{ " "}
<FormLabel sx ={labelStyle}>Username</FormLabel>
<TextField
value={inputs.name} 
onChange={(handleChange)}
margin='normal'
 variant='standard' 
 type='text' 
 name='name'/>
</>)}

<FormLabel sx ={labelStyle}>Email</FormLabel>
<TextField
value={inputs.email} 
onChange={(handleChange)}
 margin='normal' 
 variant='standard'
  type='email' 
  name='email'/>

<FormLabel>Password</FormLabel>
<TextField 
value={inputs.password} 
onChange={(handleChange)}
margin='normal' 
variant='standard'
 type='password'
  name='password'/>

<Button sx={{mt:2,borderRadius:10,bgcolor:'#2b2d42'}} type='submit' fullWidth
variant='contained'
>{isSignup? "Singup":"Login"} </Button>

<Button onClick={()=>setIsSignup(!isSignup)} sx={{mt:2,borderRadius:10}} fullWidth
>
   {isSignup? "Login":"Signup"} 
</Button>
            </Box>
        </form>
    </Dialog>
  )
}

export default Authform
