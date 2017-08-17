const RequestApi = require('./RequestApi');
const api = new RequestApi();
class Apis {

    genderApi(name) {
        const URI = 'http://gender-api.com/get?name=';
        const HEADER = {
        	'X-Gender-APIKey': 'MfXJNXKamtDPnkCqhj',
        };
        return api.requestApi(name, URI, HEADER)
            .then(result =>  {
                const GENDER = result.gender;
                console.log(GENDER);
            })
		    .catch(err => console.log(err));
    }

    fullContactApi(name) {
        const URI = 'http://api.fullcontact.com/v2/name/stats.json?name=';
        const HEADER = {
        	'X-FullContact-APIKey': 'f88e51dc316878f2',
        };
        return api.requestApi(name, URI, HEADER)
            .then(result => {
	            const OBJ = result.name.given;
	            if(OBJ.male.likelihood > OBJ.female.likelihood) {
	              console.log('gender is male');
                } else {
                    console.log('gender is female');
                }
            })
            .catch(err => console.log(err));
    }

}

module.exports = Apis;
