import buildBST from "./insert_into_BST";
import BinaryTreeNode from "./tree_node";

describe('buildBST', () => {
    it('returns null for an empty array', () => {
      expect(buildBST([])).toBeNull();
    });
  
    it('returns a single node for an array with one value', () => {
      expect(buildBST([1])).toEqual(new BinaryTreeNode(1));
    });
  
    it('builds a binary search tree for an array with multiple values', () => {
      const root = buildBST([2, 1, 3]);
      expect(root).toEqual(new BinaryTreeNode(2));
      expect(root.left).toEqual(new BinaryTreeNode(1));
      expect(root.right).toEqual(new BinaryTreeNode(3));
    });
  
    it('handles duplicate values correctly', () => {
      const root = buildBST([2, 1, 3, 1]);
      expect(root).toEqual(new BinaryTreeNode(2));
      expect(root.left).toEqual(new BinaryTreeNode(1));
      expect(root.right).toEqual(new BinaryTreeNode(3));
      expect(root.left.left).toBeNull();
      expect(root.left.right).toBeNull();
      expect(root.right.left).toBeNull();
      expect(root.right.right).toBeNull();
    });
  
    it('returns the same root node if the tree is not modified', () => {
      const root = new BinaryTreeNode(2);
      expect(buildBST([], root)).toBe(root);
      expect(build_a_bst([2], root)).toBe(root);
      expect(build_a_bst([1], root)).not.toBe(root);
    });
  });
  