/**
 * Title: Handle request and response
 * Description: Handle request and response
 * Author: Mehedi Hasan Rafiz(Back-End Developer)
 * Date: 10/02/2022
 * 
 */

// Dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const {notFoundHandler} =  require('../Handlers/routeHandlers/notFoundHandler');

// Module scaffolding(empty)
const handler = {};

handler.handleReqRes = (req, res) => {
    // Request handle
    // Get the url and parse it
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g, '');

    // Convert method to the lower case and take query string from the parseUrl
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    
    // Headers of request
    const headersObject = req.headers;
    
    // Request properties here
    const requestProperties = {
        parseUrl,
        path,
        trimedPath,
        method,
        queryStringObject,
        headersObject
    };

    // Body data decoder here
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    // Choosen handlers
    const chosenHandler = routes[trimedPath] ? routes[trimedPath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const  payloadString = JSON.stringify(payload);

        // return final response
        res.writeHead(statusCode);
        res.end(payloadString);
    })

    // Buffer decoding here
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // Response handle
        res.end('Hello world');
    });
};

module.exports = handler;