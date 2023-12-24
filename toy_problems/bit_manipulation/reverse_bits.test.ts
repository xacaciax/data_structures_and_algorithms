import  reverseBits  from './reverse_bits.ts'; 

describe('reverseBits', () => {
  it('should reverse bits of a positive number', () => {
    expect(reverseBits(43261596)).toBe(964176192); 
  });

  it('should reverse bits of zero', () => {
    expect(reverseBits(0)).toBe(0); 
  });

  it('should reverse bits of a negative number', () => {
    expect(reverseBits(-3)).toBe(3221225471); 
  });
});
