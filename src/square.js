const assert = require('assert');

function square(x) {
  assert(Number.isInteger(x), 'only integers are supported');
  return x * x;
}

module.exports = square;
