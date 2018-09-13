const express = require('express');
const urls = require('./route/url');
const server = express();


server.use('/', urls);
server.use('/css', express.static('css'));
server.use('/public', express.static('public'));

server.listen(8080);