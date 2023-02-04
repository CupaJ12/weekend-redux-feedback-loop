// understanding page, asks how user is understanding, next button will take us to support page

import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // history import
import { useState } from 'react';
function Understanding() {
	const [understanding, setUnderstanding] = useState('');

    const history = useHistory(); // useHistory

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('understanding', understanding);
		axios.post('/understanding', { understanding });
        history.push('./Supported')
	};
	return (
		<div>
			<form>
				<label>
					How well are you understanding the content?
					<input
						type='text'
						value={understanding}
						onChange={(e) => setUnderstanding(e.target.value)}
					/>
				</label>
				<button onClick={handleSubmit}
                >NEXT</button>
			</form>
		</div>
	);
}

export default Understanding;
