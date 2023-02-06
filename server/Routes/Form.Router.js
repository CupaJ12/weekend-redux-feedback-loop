const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

    router.post('/', (req, res) =>{
        console.log('post request made', req.body)

        const queryText = `INSERT INTO "prime_feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
    VALUES ($1, $2, $3, $4, $5, $6);`;
  const feedback = req.body
  pool.query(queryText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments, feedback.flagged, feedback.date])

        // const queryText = `
        //     INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
        //     VALUES ('${Feeling}', 'Incomplete');
        // `;
        // console.log(queryText);
        // pool.query(queryText)
        .then((res) => {
            // console.log(result);
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
            console.log('Error in POST', err)
        });
    });

    module.exports = router;
