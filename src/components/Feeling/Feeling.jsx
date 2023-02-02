//first page of app, asks how user is feeling, next button will take us to understanding page

import axios from 'axios';
import React from 'react';

function feeling() {
	const [feeling, setFeeling] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('feeling', feeling);
		axios.post('/feeling', { feeling });
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
