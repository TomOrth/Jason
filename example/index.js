const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);
const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server listeneing on port: ', port); 
});

