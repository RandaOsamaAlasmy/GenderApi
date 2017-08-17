'use strict';

const FullContactApi = require('./FullContactApi.js');
const GenderApi = require('./GenderApi');
const _ = require('lodash');
class InstantiateFactory {

    static getApi(apiName, key) {
        if(_.isEqual(apiName,'GenderApi')) {
            return new GenderApi(key);
        } else if(_.isEqual(apiName,'FullContactApi')) {
            return new FullContactApi(key);
        }

        return null;
    }

}

module.exports = InstantiateFactory;
