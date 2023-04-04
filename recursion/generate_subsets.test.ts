  
 describe("generate_all_subsets", () => {
    test("returns an empty array for an empty string", () => {
      expect(generate_all_subsets("")).toEqual([]);
    });
  
    test("returns an array with the input string as the only element if it has length 1", () => {
      expect(generate_all_subsets("a")).toEqual(["", "a"]);
    });
  
    test("returns all possible subsets of a two-character string", () => {
      expect(generate_all_subsets("ab")).toEqual(["", "a", "b", "ab"]);
    });
  
    test("returns all possible subsets of a three-character string", () => {
      expect(generate_all_subsets("abc")).toEqual([
        "",
        "a",
        "b",
        "ab",
        "c",
        "ac",
        "bc",
        "abc",
      ]);
    });
  
    test("returns all possible subsets of a string with duplicate characters", () => {
      expect(generate_all_subsets("aab")).toEqual(["", "a", "b", "ab", "aa", "ab", "aab", "ab"]);
    });
  });
  