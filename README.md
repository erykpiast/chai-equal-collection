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

...

assert.equalCollection([ 1, { foo: 'bar' }, 'foo' ], [ 1, { foo: 'bar' }, 'foo' ]);

assert.notEqualCollection([ 1, { foo: 'bar' }, 'foo' ], [ 1, { foo: 'bar' }, 'bar' ]);

assert.equalCollection([ 1, { foo: 'bar' }, 'foo' ], [ 1, { foo: 'bar' } ]);

assert.equalCollection([ 1, { foo: 'bar' }, 'foo' ], [ 'foo', { foo: 'bar' }, 1 ]);

```
