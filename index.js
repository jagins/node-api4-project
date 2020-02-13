const express = require('express');
const songRouter = require('./songs/songRouter');
const server = express();
server.use(express.json());

server.use('/api/songs', songRouter);

server.get('/', (req, res) =>
{
    res.json({message: 'api is working'});
})

const PORT = 5000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));