const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json('index running');
})

router.get('/api/items', (req, res) => {
     // TODO implement logic to query

    res.json('response /api/items');
})

router.get('/api/items/:id', (req, res) => {
     // TODO implement logic to query

    res.json('response /api/items/:id');
})

module.exports = router;