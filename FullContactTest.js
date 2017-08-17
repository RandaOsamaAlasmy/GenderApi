'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
const FullContactApi = require('./FullContactApi.js');
// const FullContactApiIllegalArgumentsError = require('./FullContactApi.js')
//     .FullContactApiIllegalArgumentsError;

describe('FullContactApi', () => {
    let fullContact;

    before(() => {
        fullContact = new FullContactApi('f88e51dc316878f2');
    });

    // describe('constructor', () => {
    //     //here we will check on the case of no key or anything else
    //     //that you need to be send to the constructor
    //     it('should throw illegal argument error if key is not a string', () => {
    //         const FN = () => new FullContactApi(123);
    //         //then we check on error type and its message
    //         //for example:
    //         expect(FN).to.throw(FullContactApiIllegalArgumentsError)
    //             .and.have.a.property('message').that
    //             .equals('key is not a string');
    //     });
    //
    //     it('should throw illegal argument error if key is empty ', () => {
    //         const FN = () => new FullContactApi('');
    //         expect(FN).to.throw(FullContactApiIllegalArgumentsError)
    //             .and.have.a.property('message').that
    //             .equals('key is empty');
    //     });
    // });

    //replace it with your method name
    describe('getGender', () => {
        //first we test the happy scenario
        it('should return gender', () => {
            // const PROMISE = fullContact.getGender('randa').then(gender => {
            //     expect(gender).to.be.equal('female');
            // }) ;

            // return PROMISE;
            //OR :D A SHORTER ALTERNATIVE

            const VALUE = fullContact.getGender('randa');
            return expect(VALUE.then(gender => gender)).to.eventually.equal('female');
        });

        // it('should throw an error if no name entered', () => {
        //     const FN = () =>  fullContact.getGender('');
        //     return expect(FN).to.throw(FullContactApiIllegalArgumentsError)
        //         .and.have.a.property('message').that
        //         .equals('No name to classify');
        // });

        it('should throw an error if user not found', () => {
            const PROMISE = fullContact.getGender('hagyes');
            return expect(PROMISE).to.eventually.be.rejected
                .and.to.have.property('name').that.equals('FullContactApiIllegalArgumentsError');
        });

        it('should throw an error if key is invalid or limit reached', () => {
            const FULL = new FullContactApi('key 5arbesh :D');
            const PROMISE = FULL.getGender('ahmed');
            return expect(PROMISE).to.eventually.be.rejected
                .and.to.have.property('name').that.equals('FullContactApiLimitReachedError');
        });
    });
});
