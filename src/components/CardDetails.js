import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../index.scss'

const CardDetails = ({ match }) => {
	const REACT_APP_DISKSHELF_KEY = process.env.REACT_APP_DISKSHELF_KEY
	const gameSlug = match.params.slug

	const [game, setGame] = useState(null)
	const [platforms, setPlatforms] = useState([])
	const [rating, setRating] = useState({})
	const [developer, setDeveloper] = useState([])

	useEffect(() => {
		getGame()
	}, [])

	const getGame = () => {
		const testurl = `https://api.rawg.io/api/games/${gameSlug}?key=${REACT_APP_DISKSHELF_KEY}`

		Axios(testurl)
			.then((data) => {
				setGame(data.data)
				setPlatforms(data.data.platforms)
				setRating(data.data.esrb_rating)
				setDeveloper(data.data.developers)
			})
			.catch(console.error)
	}

	//add carasoul container for details to use dif images, clips?

	if (!game) {
		return <p>loading...</p>
	}

	

	return (
		<div className='game-details'>
			<h2 className='detailsGameName'> {game.name} </h2>
			<p className='detailsReleased'> {game.released} </p>
			{/* <p> {game.genres[0]?.name}, {game.genres[1]?.name} </p> */}
			<p>
				{game.genres[0]?.name}, {game.genres[1]?.name}{' '}
			</p>
			<div className='image-div'>
				<img
					className='detail-image'
					src={game.background_image}
					alt={game.name}
				/>{' '}
			</div>
			<div className='desc-div'>
				{' '}
				<p className='detailsDesc'>{game.description_raw}</p>{' '}
			</div>

			<p className='detailsPlatform'>
				Available On: {platforms[0]?.platform?.name},{' '}
				{platforms[1]?.platform?.name}, {platforms[2]?.platform?.name},{' '}
				{platforms[3]?.platform?.name}{' '}
			</p>
			<p className='detailsRating'>{rating?.name}</p>
			<p className='detailsDev'>{developer[0]?.name}</p>
		</div>
	)
}

export default CardDetails
