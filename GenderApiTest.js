'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
const GenderApi = require('./GenderApi');
// const GenderApiIllegalArgumentsError = require('./GenderApi').GenderApiIllegalArgumentsError;

describe('GenderApi', () => {
    let genderApiObj;

    before(() => {
        genderApiObj = new GenderApi('MfXJNXKamtDPnkCqhj');
    });

    describe('constructor', () => {
        // it('should throw illegal argument error if key is not a string', () => {
        //     const FN = () => new GenderApi(123);
        //     //then we check on error type and its message
        //     //for example:
        //     expect(FN).to.throw(GenderApiIllegalArgumentsError)
        //         .and.have.a.property('message').that
        //         .equals('key is not a string');
        // });
        //
        // it('should throw illegal argument error if key is empty ', () => {
        //     const FN = () => new GenderApi('');
        //     expect(FN).to.throw(GenderApiIllegalArgumentsError)
        //         .and.have.a.property('message').that
        //         .equals('key is empty');
        // });
    });

    describe('getGender',() => {
        it('should return gender', () => {
            const PROMISE = genderApiObj.getGender('ali').then(gender => {
                expect(gender).to.be.equal('male');
            }) ;

            return PROMISE;
        });

        it('should throw an error if key is missing or invalid', () => {
            const GEN = new GenderApi('123456');
            const PROMISE = GEN.getGender('ahmed');
            return expect(PROMISE).to.eventually.be.rejected
                .and.to.have.property('name').that.equals('GenderApiIllegalArgumentsError');
        });
    });
});
