import countBits from "./counting_bits";    

describe('countBits', () => {
  it('should return an array of the number of 1s in each number from 0 to n', () => {
    expect(countBits(5)).toEqual([0,1,1,2,1,2]); 
  });
  it('should return an array of the number of 1s in each number from 0 to n', () => {
    expect(countBits(2)).toEqual([0,1,1]); 
  });
  it('should return an array of the number of 1s in each number from 0 to n', () => {
    expect(countBits(0)).toEqual([0]); 
  }); 
});