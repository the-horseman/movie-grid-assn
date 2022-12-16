import React, { useState } from 'react'
import MovieDetails from './MovieDetails';

function RenderMovies({ movies }) {

    const [seeDetails, setSeeDetails] = useState(false);
    const [movieDetails, setMovieDetails] = useState(null);

    function getImage(path) {
        if (path == null)
            return `url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png)`;
        else
            return `url("https://image.tmdb.org/t/p/w500/${path}")`

    }

    const listItems = movies.map((movie) => {
        return (
            <div className='movie'
                onClick={() => {
                    setSeeDetails(true);
                    setMovieDetails(movie);
                }}
                key={movie.id}
                style={{ backgroundImage: getImage(movie.poster_path)}}>
                <p className='mov-title'>{movie.title}</p>
                <p className='mov-avg'>{movie.vote_average}</p>
            </div>
        );
    });

    return (
        <div className='grid grid-cols-4'>
            {listItems}
            {
                seeDetails ?
                    <MovieDetails details={movieDetails} setSeeDetails={setSeeDetails} />
                    : null
            }
        </div>
    );
}

export default RenderMovies