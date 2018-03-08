const square = require('../src/square');
const expect = require('chai').expect;

describe('square', () => {
  it('should square integers correct', () => {
      expect(square(2)).to.be.equal(4);
  });
});
