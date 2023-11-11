const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log("In GET request");
    let queryText = 'SELECT * from "tasks" ORDER BY "duedate" ASC';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    })
});// end GET

// POST
router.post('/', (req, res) => {
    console.log('POST req.body', req.body);
    let queryText = 'INSERT INTO "tasks" ("name", "duedate", "complete") VALUES ($1, $2, false);'
    pool.query(queryText, [req.body.name, req.body.duedate])
    .then((result) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});// end POST

// PUT
router.put('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = `UPDATE "tasks" SET "complete" = NOT "complete" WHERE "id" = $1;`;
    pool.query(queryText, [id]) //corresponds to $1
    .then((result) =>{
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(`Error making query ${queryText}`, err);
        res.sendStatus(500);
    })
  })// end PUT

// DELETE
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let queryText = 'DELETE FROM "tasks" WHERE "id" = $1;';
    pool.query(queryText,[id] )
    .then((result) =>{
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(`Error making query ${queryText}`, err);
        res.sendStatus(500);
    })
  }) //end DELETE

module.exports = router;