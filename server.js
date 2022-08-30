const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const config = require('./config');
const { userService } = require('./services');

const app = express();
app.get('/', (req, res) => res.send('Hello Gateway API'));

userService(app, config.host, createProxyMiddleware);

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`));