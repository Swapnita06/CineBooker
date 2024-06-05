import React, { useEffect, useState } from 'react';
import { AppBar, Autocomplete, Box, TextField, Toolbar } from '@mui/material';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../api-helpers/api-helpers';

const Navbar = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies()
            .then((data) => {
                if (data && data.movies) {
                    setMovies(data.movies);
                } else {
                    console.log("No movies found");
                }
            })
            .catch((err) => console.error("Error fetching movies:", err));
    }, []);

    return (
        <AppBar position="sticky" sx={{ bgcolor: "#070F2B", zIndex: '100' }}>
            <Toolbar>
                <Box width={'20%'}>
                    <MovieCreationIcon />
                </Box>
                <Box width={'30%'} margin={"auto"}>
                    <Autocomplete
                        freeSolo
                        options={movies.map((option) => option.title)}
                        renderInput={(params) => (
                            <TextField sx={{ input: { color: "white" } }}
                                variant='standard' {...params}
                                placeholder="Search Movies" />
                        )}
                    />
                </Box>
                <Box display={'flex'}>
                    <div>
                        <Link to="/movies" style={{ color: 'inherit', textDecoration: 'none', padding: '15px' }}>Movies</Link>
                        <Link to="/admin" style={{ color: 'inherit', textDecoration: 'none', padding: '15px' }}>Admin</Link>
                        <Link to="/auth" style={{ color: 'inherit', textDecoration: 'none', padding: '15px' }}>Auth</Link>
                    </div>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
