import React, { useEffect, useState } from 'react';
import { AppBar, Box, InputBase, Toolbar, IconButton } from '@mui/material';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../api-helpers/api-helpers';

const Header = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AppBar position="sticky" style={{ backgroundColor: "#070F2B", zIndex: '100' }}>
            <Toolbar>
                <Box width={'20%'}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MovieCreationIcon />
                    </IconButton>
                </Box>
                <Box width={'30%'} margin="auto">
                    <InputBase
                        placeholder="Search Movies"
                        inputProps={{ 'aria-label': 'search movies' }}
                        style={{ color: 'white', width: '100%' }}
                        onChange={handleSearchChange}
                    />
                </Box>
                <Box display="flex">
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

export default Header;
