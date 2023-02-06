const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
	console.log('post request made', req.body);

	const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
	const feedback = req.body;
	pool
		.query(queryText, [
			feedback.feeling,
			feedback.understanding,
			feedback.supported,
			feedback.comments,
		])

		// const queryText = `
		//     INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
		//     VALUES ('${Feeling}', 'Incomplete');
		// `;
		// console.log(queryText);
		// pool.query(queryText)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log('Error in POST', err);
			res.sendStatus(500);
		});
});

module.exports = router;
