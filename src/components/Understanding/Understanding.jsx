// understanding page, asks how user is understanding, next button will take us to support page

import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // history import
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Understanding() {
	const [understanding, setUnderstanding] = useState('');
	const dispatch = useDispatch();
	const history = useHistory(); // useHistory
	const understandingReducer = useSelector(
		(store) => store.understandingReducer
	);
	const handleChange = (e) => {
		dispatch({ type: 'SET_UNDERSTANDING', payload: understanding });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('understanding', understanding);
		// axios.post('/understanding', { understanding });
		if (understanding === '') {
			alert('input required');
			return;
		}
		history.push('./Supported');
		handleChange();
	};
	return (
		<div>
			<form>
				<label>
					How well are you understanding the content?
					<input
						type='text'
						value={understanding}
						required
						placeholder='1-5, 1 is worst and 5 is best'
						onChange={(e) => setUnderstanding(e.target.value)}
					/>
				</label>
				<button onClick={handleSubmit}>NEXT</button>
			</form>
			<h6>input required</h6>
		</div>
	);
}

export default Understanding;
