'use strict';

const types = require('./');

class Type {
  constructor(type) {
    this.type = type;
  }

  ptr() {
    return new types.Pointer(this);
  }

  v() {
    throw new Error('No instances of type can be created');
  }
}
module.exports = Type;
