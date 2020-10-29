// import './App.css';
import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import { Route, Link } from 'react-router-dom'
import ShelfList from './components/ShelfList'
import CardDetails from './components/CardDetails'
import './index.scss'

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
        <Route path='/game' render={(routerProps) => {
          return (
            <CardDetails />
          )
        }} />
      
      </main>

		</div>
	)
}

export default App;
