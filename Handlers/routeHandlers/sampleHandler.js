/**
 * Title: Sample route handler
 * Descrition: Sample route handler
 * Author: Mehedi Hasan Rafiz(Back-End Developer)
 * Date: 11/02/2022
 * 
 */

// Module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;