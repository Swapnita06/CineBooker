import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import { getAllMovies } from '../api-helpers/api-helpers';
import './Newnavbar.css'; 

const Newnavbar = () => {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => {
        if (data && data.movies) {
          setMovies(data.movies);
        } else {
          console.log('No movies found');
        }
      })
      .catch((err) => console.error('Error fetching movies:', err));
  }, []);

  return (
    <div className="app-bar">
      <div className="toolbar">
        <div className="logo">
          <MovieCreationIcon />
        </div>
        <div className="search-bar">
          <input
            type="text"
            list="movies"
            placeholder="Search Movies"
          />
          <datalist id="movies">
            {movies.map((movie, index) => (
              <option key={index} value={movie.title} />
            ))}
          </datalist>
        </div>
        <div className="nav-tabs">
          <Link to="/movies" className={value === 0 ? 'active' : ''} onClick={() => setValue(0)}>Movies</Link>
          <Link to="/admin" className={value === 1 ? 'active' : ''} onClick={() => setValue(1)}>Admin</Link>
          <Link to="/auth" className={value === 2 ? 'active' : ''} onClick={() => setValue(2)}>Auth</Link>
        </div>
      </div>
    </div>
  );
};

export default Newnavbar;
