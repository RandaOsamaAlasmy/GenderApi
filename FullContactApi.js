'use strict';

const REQUEST_PROMISE_NATIVE = require('request-promise-native');
const _ = require('lodash');
class FullContactApiIllegalArgumentsError extends Error {

    constructor(msg) {
        super(msg);
        this.name = 'FullContactApiIllegalArgumentsError';
    }

}

class FullContactApiInternalServerError extends Error {

    constructor(msg) {
        super(msg);
        this.name = 'FullContactApiInternalServerError';
    }

}

class FullContactApiLimitReachedError extends Error {

    constructor(msg) {
        super(msg);
        this.name = 'FullContactApiLimitReachedError';
    }

}

class FullContactApi {

    constructor(key) {
        this.gender;
        this.uri = 'http://api.fullcontact.com/v2/name/stats.json?name=';
        this.key = key;
    }

    _call(requestObject) {
        return REQUEST_PROMISE_NATIVE.get(requestObject);
    }

    getGender(name) {
        const REQUEST_OBJECT = {
            headers: {
                'X-FullContact-APIKey': this.key,
            },
            json: true,
            qs: { name },
            uri: this.uri,
        };

        return this._call(REQUEST_OBJECT)
            .then(result => {
                const OBJ = result.name.given;
                if(OBJ.male.likelihood > OBJ.female.likelihood) {
                    this.gender = 'male';
                    // console.log('gender is male');
                    return this.gender;
                } else {
                    this.gender = 'female';
                    // console.log('gender is female');
                    return this.gender;
                }
            })

            .catch(err => {
                if(_.isEqual(err.error.status,403)) {
                    // invallid/missing key or limit reached
                    throw new FullContactApiLimitReachedError(err.error.message);
                } else if(_.isEqual(err.error.status,404)) {
                    //resource/user not found
                    throw new FullContactApiIllegalArgumentsError(err.error.message);
                } else if(_.isEqual(err.error.status,500)) {
                    throw new FullContactApiInternalServerError(err.error.message);
                }
            });
    }

}

module.exports =  FullContactApi;
module.exports.Error = FullContactApiIllegalArgumentsError;
