import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom'; // history import
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// use selector to pull in all reducers

function Review() {
	// const [Feedback, setFeedback] = useState('');
	const history = useHistory(); // useHistory
	const dispatch = useDispatch();
	const feelingReducer = useSelector((store) => store.feelingReducer);
	const understandingReducer = useSelector(
		(store) => store.understandingReducer
	);
	const supportedReducer = useSelector((store) => store.supportedReducer);
	const commentsReducer = useSelector((store) => store.commentsReducer);

	const Feedback = {
		feeling: feelingReducer,
		understanding: understandingReducer,
		supported: supportedReducer,
		comments: commentsReducer,
	};
	const bundleAndSend = () => {
		console.log('Feedback', Feedback);
		axios
			.post('/router', Feedback)
			.then((res) => {
				console.log('res', res);
				alert('Feedback sent!');
			})
			.catch((err) => {
				console.log('err', err);
				alert('Something went wrong. Please try again.');
			});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// axios.post('/comments', { Feedback });
		bundleAndSend();
		history.push('./SuccessPage');
	};

	return (
		<div>
			<p>Feeling:{Feedback.feeling}</p>
			<p>Understanding:{Feedback.understanding}</p>
			<p>Supported:{Feedback.supported}</p>
			<p>Comments:{Feedback.comments}</p>
			<button onClick={handleSubmit}>Submit all feedback</button>
		</div>
	);
}

export default Review;
