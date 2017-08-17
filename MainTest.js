'use strict';

const chai = require('chai');
chai.use(require('chai-as-promised'));
const expect = chai.expect;
const Main = require('./Main.js');
const IllegalArgumentsError = require('./Main.js').IllegalArgumentsError;

describe('Main', () => {
    let main;

    before(() => {
        main = new Main();
    });

    describe('getGender', () => {
        it('should throw illegal argument error if key is not a string', () => {
            const FN = () =>  main.getGender('fullContactApi',78383,'hanin');
            expect(FN).to.throw(IllegalArgumentsError)
                .and.have.a.property('message').that
                .equals('key is not a string');
        });

        it('should throw illegal argument error if key is empty', () => {
            const FN = () =>  main.getGender('fullContactApi','','hana');
            expect(FN).to.throw(IllegalArgumentsError)
                .and.have.a.property('message').that
                .equals('key is empty');
        });

        it('should throw illegal argument error if name is not a string', () => {
            const FN = () =>  main.getGender('fullContactApi','f88e51dc316878f2',123456);
            expect(FN).to.throw(IllegalArgumentsError)
                .and.have.a.property('message').that
                .equals('name is not a string');
        });

        it('should throw illegal argument error if name is empty', () => {
            const FN = () =>  main.getGender('fullContactApi','','');
            expect(FN).to.throw(IllegalArgumentsError)
                .and.have.a.property('message').that
                .equals('name is empty');
        });

        it('should throw illegal argument error if apiName is not a string', () => {
            const FN = () =>  main.getGender(468,'f88e51dc316878f2','handy');
            expect(FN).to.throw(IllegalArgumentsError)
                .and.have.a.property('message').that
                .equals('apiName is not a string');
        });

        it('should throw illegal argument error if apiName is empty', () => {
            const FN = () =>  main.getGender('','f88e51dc316878f2','hala');
            expect(FN).to.throw(IllegalArgumentsError)
                .and.have.a.property('message').that
                .equals('apiName is empty');
        });

        it('should return Gender', () => {
            const VALUE = main.getGender('GenderApi','MfXJNXKamtDPnkCqhj','randa');
            return expect(VALUE.then(result => result)).to.eventually.equal('female');
        });
    });
});
