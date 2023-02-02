// understanding page, asks how user is understanding, next button will take us to support page

import React from 'react';
import axios from 'axios';

function understanding() {
	const [understanding, setUnderstanding] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('understanding', understanding);
		axios.post('/understanding', { understanding });
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
				<button onClick={handleSubmit}>NEXT</button>
			</form>
		</div>
	);
}

export default Understanding;
