chai-equal-collection
=====================

Chai plugin for comparing collections.

## Usage
```
var chai = require('chai');

chai.use(
  require('chai-equal-collection')(
    /* function for comparing equality of collection elements, deep-eql if not provided */
  )
);
```
