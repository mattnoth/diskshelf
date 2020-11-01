import React, { useState } from 'react'
import Axios from 'axios'

const SearchForm = ({ games, setGames, getGames }) => {
	const [formStatus, setFormStatus] = useState('')
	const [platform, setPlatform] = useState('')
	const [genre, setGenre] = useState('')

	const REACT_APP_DISKSHELF_KEY = process.env.REACT_APP_DISKSHELF_KEY
	let url = `https://api.rawg.io/api/games?key=${REACT_APP_DISKSHELF_KEY}`
	if (formStatus) {
		url += `&search=${formStatus}`
	}
	console.log(platform)
	if (platform !== '') {
		url += `&platforms=${platform}`
	}
	if (genre !== '') {
		url += `&genres=${genre}`
	}

	const handleChange = (event) => {
		setFormStatus(event.target.value)
	}

	const handlePlatformChange = (event) => {
		setPlatform(event.target.value)
	}
	const handleGenreChange = (event) => {
		setGenre(event.target.value)
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		Axios(url)
			.then((data) => {
				setGames(data.data.results)
			})
			.catch(console.error)
	}
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='search for games...'
				onChange={handleChange}
			/>
			<select onChange={handlePlatformChange}>
				<option value=''>platforms</option>
				<option value='4'>PC</option>
				<option value='1'>XBOX One</option>
				<option value='7'>Nintendo Switch</option>
				<option value='18'>Playstation 4</option>
				{/* <option value='18'>Playstation 4</option> */}
			</select>
			<select onChange={handleGenreChange}>
				<option value=''>genres</option>
				<option value='4'>Action</option>
				<option value='51'>Indie</option>
				<option value='3'>Adventure</option>
				<option value='5'>RPG</option>
				<option value='10'>Strategy</option>
				<option value='2'>Shooter</option>
				<option value='7'>Puzzle</option>

				{/* <option value='18'>Playstation 4</option> */}
			</select>
			<button type='submit'>Search</button>
		</form>
	)
}

export default SearchForm
