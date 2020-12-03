const express = require('express');
const axios = require('axios');
const { formatListItems, formatDetailsAndDescription } = require('../utils/formatterData');

const router = express.Router();

router.get('/', (req, res) => {
    res.json('index running');
})

router.get('/api/items', async (req, res) => {
    const {query} = req.query;
    try {
        const {data} = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${encodeURIComponent(query)}`);
        res.json(formatListItems(data, false));
    }catch (err) {
        console.log(Object.keys(err))
        res.json(err);
    }
})

router.get('/api/items/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const [{data}, {data: description}] = await Promise.all([
            axios.get(`https://api.mercadolibre.com/items/${id}`),
            axios.get(`https://api.mercadolibre.com/items/${id}/description`)
        ]);;
        res.json(formatDetailsAndDescription(data, true, description));
    }catch (err) {
        console.log(Object.keys(err))
        res.json(err);
    }
    res.json('response /api/items/:id');
})

module.exports = router;