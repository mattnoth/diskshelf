import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ShelfCard from './ShelfCard'
import SearchForm from './SearchForm'


const ShelfList = ({ match }) => {
	const [games, setGames] = useState([])
	const [error, setError] = useState(false)
	const REACT_APP_DISKSHELF_KEY = process.env.REACT_APP_DISKSHELF_KEY
	const url = `https://api.rawg.io/api/games?key=${REACT_APP_DISKSHELF_KEY}&ordering=-added&page_size=50`

	useEffect(
		function getGames() {
			Axios(url)
				.then((data) => {
					setGames(data.data.results)
				})
				// .catch(error, setError())
				.catch(console.error)
		},
		[setGames,  REACT_APP_DISKSHELF_KEY, error, url]
	) 

		// function searchGames() {
		// 	const REACT_APP_DISKSHELF_KEY = process.env.REACT_APP_DISKSHELF_KEY

		// 	const url = `https://api.rawg.io/api/games?key=${REACT_APP_DISKSHELF_KEY}&ordering=-added&page_size=50&platforms=4,18,1,7`

		// 	Axios(url)
		// 		.then((data) => {
		// 			setGames(data.data.results)
		// 		})
		// 		.catch(console.error)
		// }

	// function getGames() {
		
	
	// 	// const url = `https://api.rawg.io/api/games?key=undefined&ordering=-added&page_size=50`
		
		
		
		
	// 	// &platforms=4,18,1,7`

	
	// }

	console.log(error)
	if(error){ 
		return (<p>oh no... looks like something went wrong</p>)
	}
	
	return (
		<>
		<SearchForm games={games} setGames={setGames} />
			<div className='game-container'>
				{games.map((game) => (
					<ShelfCard game={game} key={game.slug} />
				))}
			</div>
		</>
	)
}

export default ShelfList
