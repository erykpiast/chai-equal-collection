var compareCollections = require('lib/compare-collections');

module.exports = function(cmp) {
    return function(chai, utils) {
        utils.addMethod(chai.Assertion.prototype, 'equalCollection', function (expected, msg) {
            if (msg) {
                utils.flag(this, 'message', msg);
            }
            
            var obj = utils.flag(this, 'object');
            
            new chai.Assertion(obj).to.be.an('array');
            new chai.Assertion(expected).to.be.an('array');
    
            this.assert(
                compareCollections(obj, expected, cmp || require('deep-eql')),
                'expected #{this} to be equal with #{act}',
                'expected #{this} to not be equal with #{act}',
                obj,
                expected
            );
        });
        
        utils.addMethod(chai.assert, 'equalCollection', function(actual, expected, msg) {
            new chai.Assertion(actual).to.be.equalCollection(expected, msg);
        });
    };
};
