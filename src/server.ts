import express from 'express';
import router from './router';
import dotenv from 'dotenv';

dotenv.config();

const server = express();
const PORT = process.env.PORT;

server.use(express.static('public'));
server.use(router);

server.listen(PORT);
