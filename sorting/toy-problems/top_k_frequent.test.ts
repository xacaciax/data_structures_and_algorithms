// Test case 1: Empty array and k = 0.
test('Empty array and k = 0', () => {
    expect(find_top_k_frequent_elements([], 0)).toEqual([]);
  });
  
  // Test case 2: Array with one element and k = 1.
  test('Array with one element and k = 1', () => {
    expect(find_top_k_frequent_elements([1], 1)).toEqual([1]);
  });
  
  // Test case 3: Array with duplicate elements and k = 2.
  test('Array with duplicate elements and k = 2', () => {
    expect(find_top_k_frequent_elements([1, 2, 3, 1, 2], 2)).toEqual([1, 2]);
  });
  
  // Test case 4: Array with all unique elements and k > number of unique elements.
  test('Array with all unique elements and k > number of unique elements', () => {
    expect(find_top_k_frequent_elements([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  
  // Test case 5: Array with negative and zero elements and k = 3.
  test('Array with negative and zero elements and k = 3', () => {
    expect(find_top_k_frequent_elements([-1, 0, 1, 0, -1, -1, 2, 3], 3)).toEqual([-1, 0, 1]);
  });