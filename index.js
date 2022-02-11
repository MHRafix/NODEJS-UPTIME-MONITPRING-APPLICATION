/**
 * Title:  Uptime Monitoring Application
 * Description: A RestFull api to monitor up or down time of a user defined link
 * Author: Mehedi Hasan Rafiz
 * Date: 11/02/2022 - 
 * 
 */

// Dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');

// App object - module scaffolding
const app = {};

// Configaraions
app.config = {
    port: 5000,
};

// Create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port}`);
    });
};

// Handle request response
app.handleReqRes = handleReqRes;

// Start the server by colling the server here
app.createServer();