const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

    // each page will have a different route
    // this is the route for the first page

    router.post('/', (req, res) =>{
        console.log('post request made', req.body)
        // const queryText = `
        //     INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged", "date")
        //     VALUES ('${Feeling}', 'Incomplete');
        // `;
        // console.log(queryText);
        // pool.query(queryText)
        .then((result) => {
            // console.log(result);
            res.sendStatus(201);
        })
        .catch((error) => {
            res.sendStatus(500);
        });
    });

    module.exports = router;
