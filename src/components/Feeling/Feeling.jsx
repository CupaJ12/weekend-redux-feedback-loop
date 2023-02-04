//first page of app, asks how user is feeling, next button will take us to understanding page

import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom'; // history import
import { useState } from 'react';

function Feeling() {
	const [feeling, setFeeling] = useState('');
    const history = useHistory(); // useHistory

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('feeling', feeling);
		axios.post('/feeling', { feeling });
		history.push('./Understanding')
	};
	return (
		<div>
			<form>
				<label>
					How are you feeling?
					<input
						type='text'
						value={feeling}
						onChange={(e) => setFeeling(e.target.value)}
					/>
				</label>
				<button onClick={handleSubmit}>NEXT</button>
			</form>
		</div>
	);
}

export default Feeling;
