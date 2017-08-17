'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
const InstantiateFactory = require('./InstantiateFactory');
const GenderApi = require('./GenderApi');
const FullContactApi = require('./FullContactApi');

describe('InstantiateFactory',() => {
    describe('getApi', () => {
        it('should create an instance of GenderApi', () => {
            const INSTANCE = InstantiateFactory.getApi('GenderApi','MfXJNXKamtDPnkCqhj');
            return expect(INSTANCE).to.be.an.instanceof(GenderApi);
        });

        it('should create an instance of FullContactApi', () => {
            const INSTANCE = InstantiateFactory.getApi('FullContactApi','f88e51dc316878f2');
            return expect(INSTANCE).to.be.an.instanceof(FullContactApi);
        });
    });
});
