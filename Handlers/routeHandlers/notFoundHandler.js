/**
 * Title: 404 page route
 * Descrition: This is not found 404 page route
 * Author: Mehedi Hasan Rafiz(Back-End Developer)
 * Date: 11/02/2022
 * 
 */

// Module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: '404 Page is not found!',
    });
};

module.exports = handler;