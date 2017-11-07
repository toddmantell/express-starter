const mocha = require('mocha');
const {expect} = require('chai');

describe('start with failing test', () => {
  it('should run a test', () => {
    const expected = 5;
    
    const result = 2 + 4;
  
    expect(result).to.equal(expected);
  })
});