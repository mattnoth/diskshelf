import React from 'react'
import Card from 'react-bootstrap/Card'
import { NavLink } from 'react-router-dom'
import '../index.scss'

const ShelfCard = ({ game }) => {

    // use moment to format date / time ? 

	if(!game) { 
		return (
			<p>Loading...</p>
		)
	}
	return (
		<div>
			<NavLink to={`/` + game.slug}>
				<Card className='text-center, NavLink'>
					<Card.Body>
						<Card.Title>{game.name}</Card.Title>
						<Card.Img
							className='card-image'
							variant='top'
							src={game.background_image}
						/>
						<Card.Text>
							Released: {game.released} <br />
							Genre: {game.genres[0]?.name} <br />
							Metacritic Rating: {game?.metacritic}
						</Card.Text>
					</Card.Body>
				</Card>
			</NavLink>
		</div>
	)
}

export default ShelfCard
