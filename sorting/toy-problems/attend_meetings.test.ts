describe('can_attend_all_meetings', () => {
    test('returns 1 for non-overlapping intervals', () => {
      expect(can_attend_all_meetings([[1, 2], [3, 4], [5, 6]])).toBe(1);
    });
  
    test('returns 0 for overlapping intervals', () => {
      expect(can_attend_all_meetings([[1, 5], [3, 6], [4, 8]])).toBe(0);
    });
  
    test('returns 1 for single interval', () => {
      expect(can_attend_all_meetings([[1, 2]])).toBe(1);
    });
  
    test('returns 1 for empty array', () => {
      expect(can_attend_all_meetings([])).toBe(1);
    });
  
    test('returns 1 for equal start and end times', () => {
      expect(can_attend_all_meetings([[1, 1], [2, 2], [3, 3]])).toBe(1);
    });
  });
  