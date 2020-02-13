const express = require('express');
const router = express.Router();
const songsDatabase = require('./songsDatabase');

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

function validateId(req, res, next)
{
    const id = parseInt(req.params.id);
    const result = songsDatabase.filter(song => song.id === id);
    // console.log(result.length);
    if(result.length === 0)
    {
        res.status(404).json({error: 'Invalid ID'});
    }
    else
    {
        req.id = id;
        next()
    }
}

module.exports = router;