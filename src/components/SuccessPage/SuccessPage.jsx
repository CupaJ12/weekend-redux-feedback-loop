// Purpose: This component is the success page that is displayed after a user successfully submits a form
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Feeling from '../Feeling/Feeling';

function SuccessPage () {
	// reset reducer states
	const dispatch = useDispatch();

	const history = useHistory();
	const handleClick = () => {
		dispatch({ type: 'CLEAR_INPUTS' });
		history.push('/');
	};

	return (
		<div>
			<h1>Thank you!</h1>
			<button onClick={handleClick}>Leave New Feedback</button>
		</div>
	);
};

export default SuccessPage;
