const express = require('express');
const router = express.Router();
const songsDatabase = require('./songsDatabase');
const validateId = require('../utils');

router.get('/', (req, res) =>
{
    res.status(200).json(songsDatabase);
})

router.get('/:id', validateId, (req, res) =>
{
    const id = parseInt(req.id);
    const result = songsDatabase.filter(song => song.id === id);
    res.status(200).json(result);
})

module.exports = router;