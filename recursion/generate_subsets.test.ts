<<<<<<< HEAD
  
 import generateAllSubsets from "./generate_subsets";
 
 describe("generateAllSubsets", () => {
    test("returns an empty array for an empty string", () => {
      expect(generateAllSubsets("")).toEqual([""]);
    });
  
    test("returns an array with the input string as the only element if it has length 1", () => {
      expect(generateAllSubsets("a")).toEqual(["", "a"]);
    });
  
    test("returns all possible subsets of a two-character string", () => {
      expect(generateAllSubsets("ab").sort()).toEqual(["", "a", "b", "ab"].sort());
    });
  
    test("returns all possible subsets of a three-character string", () => {
      expect(generateAllSubsets("abc").sort()).toEqual([
        "",
        "a",
        "b",
        "ab",
        "c",
        "ac",
        "bc",
        "abc",
      ].sort());
    });
  });
=======
>>>>>>> parent of e6d3921 (add generate_subsets)
