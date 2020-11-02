import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Player } from 'video-react'

const DetailModal = ({ showModal, setShowModal, handleClose, handleShow, game}) => {
	return (
			<>
				<Button variant='primary' onClick={handleShow}>
					Video Clip
				</Button>
				<Modal show={showModal} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Clip for {game.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Player
							playsInline
							poster='/assets/poster.png'
							src={game.clip?.clips?.full}
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		)
};

export default DetailModal;