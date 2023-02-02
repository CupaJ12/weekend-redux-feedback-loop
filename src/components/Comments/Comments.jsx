
import axios from 'axios';
import React from 'react';

function comments() {
	const [comments, setComments] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('comments', comments);
		axios.post('/comments', { comments });
	};
	return (
		<div>
			<form>
				<label>
					Any comments you want to leave?
					<input
						type='text'
						value={comments}
						onChange={(e) => setComments(e.target.value)}
					/>
				</label>
				<button onClick={handleSubmit}>NEXT</button>
			</form>
		</div>
	);
}

export default Feeling;
