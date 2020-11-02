import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../index.scss'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import DetailModal from './DetailModal'

const CardDetails = ({ match, history, error, setError }) => {
	const REACT_APP_DISKSHELF_KEY = process.env.REACT_APP_DISKSHELF_KEY
	const gameSlug = match.params.slug

	const [game, setGame] = useState(null)
	const [platforms, setPlatforms] = useState([])
	const [rating, setRating] = useState({})
	const [developer, setDeveloper] = useState([])

	const [showModal, setShowModal] = useState(false)
	const handleClose = () => setShowModal(false)
	const handleShow = () => setShowModal(true)

	useEffect(
		function getGame() {
			const url = `https://api.rawg.io/api/games/${gameSlug}?key=${REACT_APP_DISKSHELF_KEY}`

			Axios(url)
				.then((data) => {
					setGame(data.data)
					setPlatforms(data.data.platforms)
					setRating(data.data.esrb_rating)
					setDeveloper(data.data.developers)
				})
				.catch((error) => {
					console.error(error)
					setError(true)
				})
		},
		[REACT_APP_DISKSHELF_KEY, gameSlug, setError, error]
	)

	const goBack = () => { 
		history.goBack()
	}
		if (error) {
			return <p>oh no... looks like something went wrong</p>
		}
	

	if (!game) {
		return (
			<div className='details_spinner'>
				<Spinner
					animation='border'
					variant='dark'
				/>{' '}
			</div>
		)
	}

	return (
		<div className='game-details'>
			<span>
				<h2 className='detailsGameName'> {game.name} </h2>
			</span>
			<p className='detailsReleased'> {game.released} </p>

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
{/*  */}
			<p className='detailsPlatform'>
				Available On: {platforms[0]?.platform?.name},{' '}
				{platforms[1]?.platform?.name}, {platforms[2]?.platform?.name},{' '}
				{platforms[3]?.platform?.name}{' '}
			</p>

		
			<p className='detailsRating'>{rating?.name}</p>
			<p className='detailsDev'>{developer[0]?.name}</p>
			<DetailModal
				showModal={showModal}
				setShowModal={setShowModal}
				handleClose={handleClose}
				handleShow={handleShow}
				game={game}
			/>

			<Button variant='dark' onClick={goBack}>
				{' '}
				Go Back
			</Button>
		</div>
	)
}

export default CardDetails
