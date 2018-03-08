const square = require('../../../src/square');
const expect = require('chai').expect;

describe('square as admin', () => {
  it('should square integers correct', () => {
      expect(square(2)).to.be.equal(4);
  });
});
