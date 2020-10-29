import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ShelfCard from './ShelfCard'
import CardDetails from './CardDetails'

const ShelfList = () => {
	const [games, setGames] = useState([])

	useEffect(() => {
		getGames()
	}, [])

	function getGames() {
		const REACT_APP_DISKSHELF_KEY = process.env.REACT_APP_DISKSHELF_KEY

        const testurl = `https://api.rawg.io/api/games?key=${REACT_APP_DISKSHELF_KEY}&ordering=-rating&platforms=18&genres=role-playing-games-rpg&page_size=20`
        
		const url = `https://api.rawg.io/api/games?key=${REACT_APP_DISKSHELF_KEY}&ordering=-rating&platforms=18&genres=role-playing-games-rpg&page_size=20`

		Axios(testurl)
			.then((data) => {
				console.log(data.data.results)
				setGames(data.data.results)
			})
			.catch(console.error)
	}
	return (
		<div className='game-container'>
			{games.map((game) => (
				<ShelfCard game={game} key={game.slug} />
			))}
          
		</div>
	)
}

export default ShelfList
