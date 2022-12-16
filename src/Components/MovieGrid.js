import React, { useEffect } from 'react'
import axios from 'axios';

import RenderMovies from "./RenderMovies"

function Movie_grid({ movies, setMovies }) {

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((response) => {
                setMovies(response.data.results)
            });
    }, [setMovies]);

    return (
        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <p className='grid-title align'>Most Recent Movies</p>
            {movies ? <RenderMovies movies={movies} /> : null}
        </div>
    )
}

export default Movie_grid