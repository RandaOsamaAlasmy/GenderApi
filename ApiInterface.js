class UnimplementedMethod extends Error {

    constructor(msg) {
        super(msg);
        this.name = 'UnimplementedMethod';
    }

}

class ApiInterface{

    _call(requestObject) {
        throw new UnimplementedMethod('method not implemented');
    }

    getGender(name) {
        throw new UnimplementedMethod('method not implemented');
    }

}

module.exports = ApiInterface;
