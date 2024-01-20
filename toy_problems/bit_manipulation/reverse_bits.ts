export default function reverseBits(n: number): number {  
    // Initialize rev to 0.
    let rev = 0;
  
    // Loop through all 32 bits of n.
    for (let i = 0; i < 32; i++) {
      // Shift rev left by 1 bit and add the last bit of n to it.
      rev = (rev << 1) | (n & 1);
      // Shift n right by 1 bit to get the next bit.
      n >>>= 1;
    }
    return rev >>>= 0;
  };