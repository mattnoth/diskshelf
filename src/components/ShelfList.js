import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ShelfCard from './ShelfCard'
import SearchForm from './SearchForm'


const ShelfList = ({ match }) => {
	const [games, setGames] = useState([])

	useEffect(() => {
		getGames()
		
	}, [])

	function getGames() {
		const REACT_APP_DISKSHELF_KEY = process.env.REACT_APP_DISKSHELF_KEY
	
		const url = `https://api.rawg.io/api/games?key=${REACT_APP_DISKSHELF_KEY}&ordering=-added&page_size=50&platforms=4,18,1,7`

		Axios(url)
			.then((data) => {
				setGames(data.data.results)
			})
			.catch(console.error)
	}
	console.log(match)
	return (
		<>
		<SearchForm games={games} setGames={setGames} getGames={getGames} />
			<div className='game-container'>
				{games.map((game) => (
					<ShelfCard game={game} key={game.slug} />
				))}
			</div>
		</>
	)
}

export default ShelfList
