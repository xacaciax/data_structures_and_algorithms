import find_top_k_frequent_elements from "./top_k_frequent";

  test('Empty array and k = 0', () => {
    expect(find_top_k_frequent_elements([], 0)).toEqual([-1]);
  });
  
  test('Array with one element and k = 1', () => {
    expect(find_top_k_frequent_elements([1], 1)).toEqual([1]);
  });
  
  test('Array with duplicate elements and k = 2', () => {
    expect(find_top_k_frequent_elements([1, 2, 3, 1, 2], 2)).toEqual([2, 1]);
  });
  
  test('Array with all unique elements and k > number of unique elements', () => {
    expect(find_top_k_frequent_elements([1, 2, 3, 4], 5).sort()).toEqual([1, 2, 3, 4].sort());
  });