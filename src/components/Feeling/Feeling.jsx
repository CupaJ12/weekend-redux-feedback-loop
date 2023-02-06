//first page of app, asks how user is feeling, next button will take us to understanding page

import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom'; // history import
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Feeling() {
	// declarations of const
	const [feeling, setFeeling] = useState('');
	const history = useHistory(); // useHistory
	const dispatch = useDispatch();
	const feelingReducer = useSelector((store) => store.feelingReducer);
	// handleChange function
	const handleChange = (e) => {
		dispatch({ type: 'SET_FEELING', payload: feeling });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('feeling', feeling);
		// axios.post('/feeling', { feeling });
		if (feeling === '') {
			alert('input required');
			return;
		}
		history.push('./Understanding');
		handleChange();
	};
	return (
		<div>
			<form>
				<label>
					How are you feeling?
					<input
						type='number'
						value={feeling}
						required='required'
						placeholder='1-5, 1 is worst and 5 is best'
						onChange={(e) => setFeeling(e.target.value)}
					/>
				</label>
				<button onClick={handleSubmit}>NEXT</button>
			</form>
			<h6>input required</h6>
		</div>
	);
}

export default Feeling;
