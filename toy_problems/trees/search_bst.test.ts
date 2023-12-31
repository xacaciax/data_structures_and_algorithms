import BinaryTreeNode from "./tree_node";
import search_node_in_bst from "./search_bst.test.ts"; // Adjust the import path as needed

describe("search_node_in_bst", () => {
  it("should return true if the value exists in the BST (simple case)", () => {
    const root = new BinaryTreeNode(5);
    expect(search_node_in_bst(root, 5)).toBe(true);
  });

  it("should return false if the value does not exist in the BST (simple case)", () => {
    const root = new BinaryTreeNode(10);
    expect(search_node_in_bst(root, 5)).toBe(false);
  });

  it("should return true if the value exists in the BST (multiple levels)", () => {
    const root = new BinaryTreeNode(10);
    root.left = new BinaryTreeNode(5);
    root.right = new BinaryTreeNode(15);
    expect(search_node_in_bst(root, 15)).toBe(true);
  });

  it("should return false if the value does not exist in the BST (multiple levels)", () => {
    const root = new BinaryTreeNode(10);
    root.left = new BinaryTreeNode(5);
    root.right = new BinaryTreeNode(15);
    expect(search_node_in_bst(root, 7)).toBe(false);
  });

  it("should return false for an empty BST", () => {
    const root = null;
    expect(search_node_in_bst(root, 5)).toBe(false);
  });
});
