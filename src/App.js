// import './App.css';
import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import { Route, Link } from 'react-router-dom'
import ShelfList from './components/ShelfList'

function App() {
  return (
		<div>
			<header>
				{' '}
				<Navigation />{' '}
			</header>
      <main>
        <Route path='/' exact render={(routerProps) => { 
          return (
            <ShelfList
            />
          )
        }} />
      </main>

		</div>
	)
}

export default App;
