'use strict';

const REQUEST_PROMISE_NATIVE = require('request-promise-native');
const _ = require('lodash');
const ApiInterface = require('./ApiInterface');
class GenderApiIllegalArgumentsError extends Error {

    constructor(msg) {
        super(msg);
        this.name = 'GenderApiIllegalArgumentsError';
    }

}

class GenderApiILimitReachedError extends Error {

    constructor(msg) {
        super(msg);
        this.name = 'GenderApiILimitReachedError';
    }

}

class GenderApiIUnkownError extends Error {

    constructor(msg) {
        super(msg);
        this.name = 'GenderApiIUnkownError';
    }

}

class GenderApi extends ApiInterface {

    constructor(key) {
        super();
        this.gender;
        this.uri = 'http://gender-api.com/get?name=';
        this.key = key;
    }

    _call(requestObject) {
        return REQUEST_PROMISE_NATIVE.get(requestObject);
    }

    getGender(name) {
        const REQEUST_OBJECT = {
            'X-Gender-APIKey': this.key,
            json: true,
            qs: { name },
            uri: this.uri,
        };

        return this._call(REQEUST_OBJECT)
            .then(result =>  {
                if(_.isEqual(result.errno,30)) {
                    throw new GenderApiILimitReachedError('limit reached.');
                } else if(_.isEqual(result.errno,40)) {
                    throw new GenderApiIllegalArgumentsError('invalid or missing key');
                } else if(_.isEqual(result.errno,500)) {
                    throw new GenderApiIUnkownError('unknown error');
                } else {
                    this.gender = result.gender;
                    return this.gender;
                }
            })

            .catch(err => {
                console.log(err);
            });
    }

}

module.exports =  GenderApi;
module.exports.Error = GenderApiIllegalArgumentsError;
