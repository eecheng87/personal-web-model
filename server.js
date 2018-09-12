const express = require('express');
const urls = require('./route/url');
const server = express();


server.use('/', urls);
server.use('/css', express.static('css'));

server.listen(8080);