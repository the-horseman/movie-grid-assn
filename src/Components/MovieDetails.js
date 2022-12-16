import React from 'react'

function MovieDetails({ details, setSeeDetails }) {

    function getFromattedDate(date) {
        const arr = ["Januray", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const temp = date.split("-");
        console.log(temp);
        const mnth = arr[parseInt(temp[1])-1] + " ";
        return mnth + temp[2] + ", " + temp[0];
    }

    console.log(details);
    return (
        <div className='details-container'>
            <div className='details'>
                <div className='title-container'>
                    <p className='title'>{details.title}</p>
                    <p className='close-butt'
                        onClick={() => {
                            setSeeDetails(false);
                        }}>X</p>
                </div>
                <div className='expand-container'>
                    <img
                        className='movie-img'
                        src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                        alt={"movie"}></img>
                    <div className='movie-text-container'>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <p style={{fontWeight:"bold"}}>Release Date: </p>
                            <p>&nbsp;{getFromattedDate(details.release_date)}</p>
                        </div>
                        <p style={{margin:"1em 0em 1em 0em"}}>{details.overview}</p>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <p style={{fontWeight:"bold"}}>{details.vote_average}</p>
                            <p>&nbsp;/ 10 {`(${details.vote_count} total votes)`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails