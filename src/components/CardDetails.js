import React, { useState, useEffect } from 'react'
import ShelfList from './ShelfList'
import Axios from 'axios'


const CardDetails = () => {
	const REACT_APP_DISKSHELF_KEY = process.env.REACT_APP_DISKSHELF_KEY
	const gameSlug = `the-witcher-3-game-of-the-year`
    
    const [game, setGame] = useState([])
    const [platforms, setPlatforms] = useState([])
    
    useEffect(() => {
       getGame()
    }, [])

    
    const getGame = () => {

        const testurl = `https://api.rawg.io/api/games/key=${REACT_APP_DISKSHELF_KEY}/${gameSlug}`
        const testurl2 = `https://api.rawg.io/api/games/the-witcher-3-game-of-the-year`
		Axios(testurl2)
			.then((data) => {
				console.log(data.data)
                setGame(data.data)
                setPlatforms(data.data.platforms)
                
			})
			.catch(console.error)
    }
 
    //add carasoul container for details to use dif images, clips? 

	return (
		<div className='game-details'>
			<h2> {game.name} </h2>
			<p> {game.released} </p>
			{/* <p> {game.genres[0].name}, {game.genres[1].name} </p> */}
			<p>
				{/* {game.genres[0].name}, {game.genres[1].name}{' '} */}
			</p>
			<img
				className='detail-image'
				src={game.background_image}
				alt={game.name}
			/>
			<p>{game.description_raw}</p>
			{/* <p>
				Available On: {platforms[0]?.platform.name},{' '}
				{platforms[1]?.platform.name}, {platforms[2]?.platform.name},{' '}
				{platforms[3]?.platform.name}{' '}
			</p> */}
        <p>Rating: {game.esrb_rating.name}</p>
    {/* <p> Developed By {game.developers[0].name} </p> */}
			{/* <p>Genres: {game.genres[0].name}</p> */}
		</div>
	)
}

export default CardDetails
