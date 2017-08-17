'use strict';

const REQUEST_PROMISE_NATIVE = require('request-promise-native');
class RequestApi {

    requestApi(requestObject) {
        return REQUEST_PROMISE_NATIVE.get(requestObject);
    }

}

module.exports = RequestApi;
