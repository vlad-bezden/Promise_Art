'use strict';

const callModule = require('./module'),
    serverDetails = {
        // Fully qualified URL Request
        // path: 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=MSFT',
        method: 'GET'
    },
    marketBaseUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json';

if (process.argv.length <= 2) {
    console.log('You should pass stock symbol');
    process.exit(1);
} else {
    serverDetails.path = `${marketBaseUrl}?symbol=${process.argv[2]}`;
}

callModule.getData(serverDetails)
    .then(response => {
        console.log(response)
    }).catch((err) => {
        console.error(err);
    });