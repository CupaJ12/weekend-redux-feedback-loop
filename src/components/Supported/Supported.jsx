import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom'; // history import
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
function Supported() {
	const [supported, setSupported] = useState('');
	const history = useHistory(); // useHistory
	const dispatch = useDispatch();
	const supportedReducer = useSelector((store) => store.supportedReducer);
	const handleChange = (e) => {
		dispatch({ type: 'SET_SUPPORTED', payload: supported });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('supported', supported);
		// axios.post('/supported', { supported });
		if (Supported === '') {
			alert('input required');
			return;
		}
		history.push('./Comments');
		handleChange();
	};
	return (
		<div>
			<form>
				<label>
					How well supported are you feeling?
					<input
						type='text'
						value={supported}
						required
						placeholder='1-5, 1 is worst and 5 is best'
						onChange={(e) => setSupported(e.target.value)}
					/>
				</label>
				<button onClick={handleSubmit}>NEXT</button>
			</form>
			<h6>input required</h6>
		</div>
	);
}

export default Supported;
