import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ShelfCard from './ShelfCard'


const ShelfList = () => {
	const [games, setGames] = useState([])

	useEffect(() => {
		getGames()
	}, [])


	// PS5 - id 187

	// PC - id 4

	// XBOX ONE - id 1
	// PS4 - 18
	//Switch id 7

	function getGames() {
		const REACT_APP_DISKSHELF_KEY = process.env.REACT_APP_DISKSHELF_KEY
		// const testurl = `https://api.rawg.io/api/games?key=${REACT_APP_DISKSHELF_KEY}&ordering=-rating&platforms=18&genres=role-playing-games-rpg&page_size=20`

		const testurl2 = `https://api.rawg.io/api/games?key=${REACT_APP_DISKSHELF_KEY}&dates=2019-10-10,2020-10-10&ordering=-added&page_size=50&`
		// ${platforms}
		// const platforms = `platforms=${userInputPlatforms}`

		Axios(testurl2)
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
