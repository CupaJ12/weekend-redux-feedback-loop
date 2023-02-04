import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom'; // history import
import { useState } from 'react';
function Review() {
	const [Feedback, setFeedback] = useState('');
    const history = useHistory(); // useHistory

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('comments', Feedback);
		axios.post('/comments', { Feedback });

	};

    // display all feedback on the DOM, pull in info from each reducer
	return (
		<div>
            <p>Feeling:</p>
            <p>Understanding:</p>
            <p>Supported:</p>
            <p>Comments:</p>
            <button onClick={handleSubmit}>Submit all feedback</button>
        </div>
	);
}

export default Review;
