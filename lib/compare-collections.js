module.exports = function compareCollections(expected, actual, cmp) {
    if (expected.length !== actual.length) {
        return false;
    }

    for(var i = 0, len = expected.length; i < len; i++) {
        if(!cmp(expected[i], actual[i])) {
            return false;
        }
    }
    
    return true;
};
