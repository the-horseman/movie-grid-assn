import React, { useState } from 'react'
import axios from 'axios';

function Search_bar({ setMovies }) {
	const [message, setMessage] = useState('');

	const handleChange = (event) => {
		setMessage(event.target.value);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			performSearch(message);
			setMessage("");
		}
	};

	function performSearch(string) {
		axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${string}&page=1&include_adult=false`)
		.then((response) => {
			setMovies(response.data.results);
		});
	}

	return (
		<>
			<input
				className='search-input'
				type={"text"}
				name="message"
				value={message}
				placeholder={"Search for a movie"}
				onChange={handleChange}
				onKeyDown={handleKeyDown} />
		</>
	)
}

export default Search_bar