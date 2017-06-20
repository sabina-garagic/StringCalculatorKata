const expect = require('expect.js');
const stringCalculator = require('./index.js');

describe('String Calculator', () => {
  it('should return 0 when empty string is passed', () => {
    expect(stringCalculator.add('')).to.be(0);
  });
  it('should return 1 when 1 is passed', () => {
    expect(stringCalculator.add('1')).to.be(1);
  });
  it('should return 3 when 2,1 are passed', () => {
    expect(stringCalculator.add('2,1')).to.be(3);
  });
  it('should return 5 when 2,1,2 are passed', () => {
    expect(stringCalculator.add('2,1,2')).to.be(5);
  });  
  it('should handle multi digit numbers correctly', () => {
    expect(stringCalculator.add('10,100,2')).to.be(112);
  });
  it('should handle strings with space after number correctly', () => {
    expect(stringCalculator.add('10 ,100 ,2 ')).to.be(112);
  });
  it('should return 6 when 1\\n2,3 are passed', () => {
    expect(stringCalculator.add('1\n2,3 ')).to.be(6);
  });
  it('should return 1 when 1,\\n are passed', () => {
    expect(stringCalculator.add('1,\n ')).to.be(1);
  });  
});