import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SuccessPage from '../SuccessPage/SuccessPage';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1 className='App-title'>Feedback!</h1>
				<h4>Don't forget it!</h4>
			</header>
			<Router>
				<br />
				<div>
					<Route path='/' exact>
						<Feeling />
					</Route>
					<Route path='/Understanding' exact>
						<Understanding />
					</Route>
					<Route path='/Supported' exact>
						<Supported />
					</Route>
					<Route path='/Comments' exact>
						<Comments />
					</Route>
					<Route path='/Review' exact>
						<Review />
					</Route>
					<Route path='/SuccessPage' exact>
						<SuccessPage />
					</Route>
				</div>
			</Router>
		</div>
	);
}

export default App;
