'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
const RequestApi = require('./RequestApi');

describe('RequestApi', () => {
    let requestApiObj;

    before(() => {
        requestApiObj = new RequestApi('MfXJNXKamtDPnkCqhj');
    });

    describe('requestApi', () => {
        it('should return a promise', () => {
            const requestObject = {
                'X-Gender-APIKey': 'MfXJNXKamtDPnkCqhj',
                json: true,
                qs: {
                    name: 'fouad' },
                uri: 'http://gender-api.com/get?name=',
            };
            return expect(Promise.resolve(requestApiObj.requestApi(requestObject)))
                .to.eventually.have.property('gender');
        });
    });
});
