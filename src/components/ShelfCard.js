import React from 'react'

const ShelfCard = ({ game }) => {
	return (
		<div>
			<h3>{game.name}</h3>
			<img src={game.background_image} alt={game.name} />
			<h4>Metacritic Rating: {game?.metacritic}</h4>
		</div>
	)
}

export default ShelfCard
