const songsDatabase = require('../songs/songsDatabase');

function validateId(req, res, next)
{
    const id = parseInt(req.params.id);
    const result = songsDatabase.filter(song => song.id === id);
    
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

module.exports = validateId;