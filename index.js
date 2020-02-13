const express = require('express');
const helmet = require('helmet');
const songRouter = require('./songs/songRouter');
const server = express();
server.use(helmet());
server.use(express.json());

server.use('/api/songs', songRouter);

server.get('/', (req, res) =>
{
    res.json({
        message: 'Song api is working', 
        endpoint: '/api/songs', 
        descrption: 'Custom song API using a static database. You can get all songs or by ID'
    });
})

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));