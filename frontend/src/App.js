import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import HomePage from './pages/HomePage';
import styles from './App.module.css';
export default class App extends Component {
	render() {
		return (
			<div className={styles['App']}>
				<ErrorBoundary>
					<Router>
						<Route exact path='/' component={HomePage} />
					</Router>
				</ErrorBoundary>
			</div>
		);
	}
}
