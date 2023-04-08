import towerOfHanoi from './tower_of_hanoi';

describe('towerOfHanoi function', () => {
  test('should return an empty array when n is 0', () => {
    const result = towerOfHanoi(0);
    expect(result).toEqual([]);
  });

  test('should return an array of 1 step when n is 1', () => {
    const result = towerOfHanoi(1);
    expect(result).toEqual([[1, 3]]);
  });

  test('should return an array of 3 steps when n is 2', () => {
    const result = towerOfHanoi(2);
    expect(result).toEqual([[1, 2], [1, 3], [2, 3]]);
  });

  test('should return an array of 7 steps when n is 3', () => {
    const result = towerOfHanoi(3);
    expect(result).toEqual([[1, 3], [1, 2], [3, 2], [1, 3], [2, 1], [2, 3], [1, 3]]);
  });

  test('should return an array of 15 steps when n is 4', () => {
    const result = towerOfHanoi(4);
    expect(result).toEqual([
      [1, 2],
      [1, 3],
      [2, 3],
      [1, 2],
      [3, 1],
      [3, 2],
      [1, 2],
      [1, 3],
      [2, 3],
      [2, 1],
      [3, 1],
      [2, 3],
      [1, 2],
      [1, 3],
      [2, 3],
    ]);
  });
});
