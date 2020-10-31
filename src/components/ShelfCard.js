import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import '../index.scss'

const ShelfCard = ({ game }) => {
	// return metacritic rating only if there is one; if not, return rating out of 5
    // when you click the card, it opens the game specific? -- whats in the game specific 
    // user can filter data based on certain queries.. what can the queries be. 
    
    // genre array won't always have more than one... how to display how many the array has? 

    // use moment to format date / time ? 

    // make the image the width of name header 

	return (
		<div>
			<Link to={`/` + game.slug}>
				<Card className='text-center'>
					<Card.Body>
						<Card.Title>{game.name}</Card.Title>
						<Card.Img
							className='card-image'
							variant='top'
							src={game.background_image}
						/>
						<Card.Text>
							Released: {game.released} <br />
							Genre: {game.genres[0].name} <br />
							Metacritic Rating: {game?.metacritic}
						</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</div>
	)
}

export default ShelfCard
