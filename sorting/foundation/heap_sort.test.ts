import heap_sort from "./heap_sort";
  
describe("heapSort", () => {
  it("returns an empty array when given an empty array", () => {
    expect(heap_sort([])).toEqual([]);
  });

  it("returns a sorted array when given an unsorted array", () => {
    expect(heap_sort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it("returns the same array when given a sorted array", () => {
    expect(heap_sort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("returns a sorted array when given an array with negative numbers", () => {
    expect(heap_sort([-3, -2, -1, -5, -4])).toEqual([-5, -4, -3, -2, -1]);
  });

  it("returns a sorted array when given an array with repeated numbers", () => {
    expect(heap_sort([3, 2, 1, 2, 3, 1])).toEqual([1, 1, 2, 2, 3, 3]);
  });
});
