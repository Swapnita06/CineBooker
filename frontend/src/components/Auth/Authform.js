import { Box, Button, Dialog, FormLabel, TextField, Typography } from '@mui/material'
import React from 'react'

const labelStyle={mt:1,mb:1}

const Authform = () => {
  return (
    <Dialog open={true}>
        <Typography 
        variant='h3' textAlign={"center"}
        >
            Login
        </Typography>
        <form>
            <Box display={'flex'} justifyContent={'center'} flexDirection={"column"}
            width={400}
            margin={"auto"}
            alignContent={"center"}
            padding={6}
            >

<FormLabel sx ={labelStyle}>Username</FormLabel>
<TextField margin='normal' variant='standard' type='text' name='name'/>


<FormLabel sx ={labelStyle}>Email</FormLabel>
<TextField margin='normal' variant='standard' type='email' name='email'/>

<FormLabel>Password</FormLabel>
<TextField margin='normal' variant='standard' type='password' name='password'/>

<Button sx={{mt:2,borderRadius:10,bgcolor:'#2b2d42'}} type='submit' fullWidth
variant='contained'
>LOGIN</Button>

<Button sx={{mt:2,borderRadius:10}} fullWidth
>LOGIN</Button>
            </Box>
        </form>
    </Dialog>
  )
}

export default Authform
