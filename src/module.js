'use strict';

const q = require('q'),
    http = require('http');

module.exports = {
    getData (options) {
        let data = '',
            defer = q.defer(),
            request;

        if (!options) {
            defer.reject('Please specify the rul to receive data');
        } else {
            request = http.request(options, response => {
                response.setEncoding('utf-8');
                response.on('data', chunk => {
                    data += chunk;
                });
                response.on('end', () => {
                    try {
                        let receivedJson = JSON.parse(data);
                        defer.resolve(receivedJson);
                    } catch (error) {
                        defer.reject(error);
                    }
                });
            });
        }
        request.end();
        return defer.promise;
    }
};