const http = require('http');
const express = require('express');

const host = '127.0.0.1';
const port = 8080;
const url = `http://${host}:${port}/`;

const app = express();

app.set('port', port);

app.use((req, res, next) => {
    res.status(404).send();
});

const server = http.createServer(app);

server.listen(port, host, () => {
    console.log(`Server listening at ${url}`);
});