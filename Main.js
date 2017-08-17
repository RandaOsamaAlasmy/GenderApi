'use strict';

const _ = require('lodash');
const InstantiateFactory = require('./InstantiateFactory.js');
class IllegalArgumentsError extends Error {

    constructor(msg) {
        super(msg);
        this.name = 'IllegalArgumentsError';
    }

}

class Main {

    getGender(apiName, key, name) {
        // let toValidate = {
        //     name,
        //     key,
        //     apiName,
        // }
        // console.log(toValidate.name);

        const validator = {
            set(obj, prop, value) {
                if(_.isEqual(prop,'key') ||
                _.isEqual(prop,'name') ||
                _.isEqual(prop,'apiName')) {
                    if(! _.isString(value)) {
                        throw new IllegalArgumentsError(`${prop} is not a string`);
                    }

                    if(_.isEmpty(value)) {
                        throw new IllegalArgumentsError(`${prop} is empty`);
                    }

                    if(_.isEqual(value,'undefined')) {
                        throw new IllegalArgumentsError(`${prop} is undefined`);
                    }
                }

                obj[prop] = value;
                return true;
            },
        };

        const proxy = new Proxy({},validator);
        proxy.name = name;
        proxy.apiName = apiName;
        proxy.key = key;
        // console.log(p);
        const api = InstantiateFactory.getApi(proxy.apiName, proxy.key);
        return api.getGender(proxy.name)
            .then(gender => gender)
            .catch(err => console.log(err));
    }

}

module.exports = Main;
module.exports.Error = IllegalArgumentsError;
