import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

import Search_bar from './Components/Search_bar';
import Movie_grid from './Components/Movie_grid';
import logo from "./logo.svg";

function App() {

  const [movies, setMovies] = useState(null);

  return (
    <div className='app'>
      <div className='nav-bar'>
        <div className='company-logo'>
          <img src={logo} onClick={() => {
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
              .then((response) => {
                setMovies(response.data.results)
              });
          }}
            style={{ cursor: 'pointer' }}
          ></img>
        </div>
        <Search_bar setMovies={setMovies} />
      </div>
      <div className='line'></div>
      <div className='recent-grid'>
        <Movie_grid movies={movies} setMovies={setMovies} />
      </div>
    </div>
  );
}

export default App;
