// import './App.css';
import React from 'react'
import Navigation from './components/Navigation'
import { Route } from 'react-router-dom'
import ShelfList from './components/ShelfList'
import CardDetails from './components/CardDetails'
import './index.scss'
import SearchForm from './components/SearchForm'

function App() {
	return (
		<div>
			<header>
				{' '}
				<Navigation />{' '}
			</header>
			<main>
				{/* <Route path='/'
        render={(routerProps)} => {
          return <SearchForm />
        }} */}
				{/* <Route
					path='/'
					exact
					render={(routerProps) => {
						return <SearchForm />
					}}
				/> */}
				<Route
					path='/'
					exact
					render={(routerProps) => {
						return <ShelfList />
					}}
				/>
				<Route
					path='/:slug'
					render={(routerProps) => {
						return (
							<CardDetails
								history={routerProps.history}
								match={routerProps.match}
							/>
						)
					}}
				/>
			</main>
		</div>
	)
}

export default App
