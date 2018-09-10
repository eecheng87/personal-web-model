const express = require('express');
const urls = require('./route/url');
const server = express();

server.use('/', urls);

server.listen(8080);