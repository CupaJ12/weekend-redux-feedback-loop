
import axios from 'axios';
import React from 'react';

function supported () {
	const [supported, setSupported] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('supported', supported);
		axios.post('/supported', { supported });
	};
	return (
		<div>
			<form>
				<label>
					How well supported are you feeling?
					<input
						type='text'
						value={supported}
						onChange={(e) => setSupported(e.target.value)}
					/>
				</label>
				<button onClick={handleSubmit}>NEXT</button>
			</form>
		</div>
	);
}

export default Supported;
