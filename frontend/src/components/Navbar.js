import React, { useState } from 'react'
import { AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar } from '@mui/material'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';

const dummyArray=["movie1"," movie2", "movie3"]
const Navbar = () => {
 const [value,setValue]= useState(0);
  return (
<AppBar sx ={{bgcolor:"#070F2B"}}>
    <Toolbar>
        <Box width={'20%'}>
<MovieCreationIcon/>
        </Box>
        <Box width={'30%'} margin={"auto"}>
        <Autocomplete
        freeSolo
        options={dummyArray.map((option) => option)}
        renderInput={(params) =>(
             <TextField sx ={{input:{color:"white"} }}
             variant='standard' {...params} 
             placeholder="Search Movies" />)}
      />
        </Box>
        <Box display={'flex'}>
<Tabs textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
<Tab label="Movies"/>
    <Tab label="Admin"/>
    <Tab label="Auth"/>
</Tabs>
        </Box>
    </Toolbar>
</AppBar>
  )
}

export default Navbar
