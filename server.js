const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const router = require('./router');

const PORT = 3000;

server.use(bodyParser.json());
server.use(express.static('public'));
server.use('/', router);

server.listen(PORT, () => console.log(`listen on ${PORT}`));
