const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const chalk = require('chalk');

// adding environment variales configuration file
require('dotenv').config();
// adding mongodb to connect
require('./services/mongodb.services')()
// adding the startup routes
const port = process.env.APP_PORT;
require('./startup/routes')(app);
// running the app on the port
server.listen(port, () => {
    console.log(chalk.bold.green(`Listening on port ${port} . . .`));
  });