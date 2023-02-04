import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom'; // history import
import { useState } from 'react';
function Comments() {
	const [comments, setComments] = useState('');
	const history = useHistory(); // useHistory

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('comments', comments);
		axios.post('/comments', { comments });
		history.push('./Review');
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

export default Comments;
