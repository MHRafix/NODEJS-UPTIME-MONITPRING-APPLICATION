/**
 * Title: Application Routes
 * Descrition: Application Routes
 * Author: Mehedi Hasan Rafiz(Back-End Developer)
 * Date: 11/02/2022
 * 
 */

// Dependencies
const {sampleHandler} = require('./Handlers/routeHandlers/sampleHandler');
const {notFoundHandler} = require('./Handlers/routeHandlers/notFoundHandler');

const routes = {
    'sample': sampleHandler,
    '404NotFound': notFoundHandler,
};

module.exports = routes;