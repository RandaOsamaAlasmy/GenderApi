'use strict';

// const FullContactApi = require('./FullContactApi.js');
const GenderApi = require('./GenderApi');
// const fullContactApi = new FullContactApi('f88e51dc316878f2');
const genderApi = new GenderApi('MfXJNXKamtDPnkCqhj');
// fullContactApi.getGender('randa')
//     .then(result => console.log(result))
//     .catch(err => console.log(err));
genderApi.getGender('facebook')
    .then(res => console.log(res));
