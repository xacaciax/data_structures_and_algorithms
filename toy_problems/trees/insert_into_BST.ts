import BinaryTreeNode from "./tree_node";

/**
 * Builds a binary search tree from an array of values.
 * @param values An array of values to be inserted into the binary search tree.
 * @returns The root node of the resulting binary search tree.
 */
export default function buildBST(values: number[]): BinaryTreeNode {
    let root: BinaryTreeNode | null = null;
    for (let i = 0; i < values.length; i++) {
      root = insert(root, values[i]);
    }
    return root as BinaryTreeNode;
  }
  
  /**
   * Inserts a new value into a binary search tree.
   * @param root The root node of the binary search tree.
   * @param value The value to be inserted into the binary search tree.
   * @returns The root node of the binary search tree.
   */
  export const insert = (root: BinaryTreeNode | null, value: number) => {
    let newNode = new BinaryTreeNode(value);
    if (root === null) {
      return newNode;
    }
  
    let k = newNode.value;
    let prev: BinaryTreeNode | null = null;
    let curr: BinaryTreeNode | null = root;
    while (curr !== null) {
      if (k === curr.value) {
        console.log('node already exists');
        break;
      } else if (k < curr.value) {
        prev = curr;
        curr = curr.left;
      } else {
        prev = curr;
        curr = curr.right;
      }
    }
  
    if (prev !== null) {
      if (k < prev.value) {
        prev.left = newNode;
      } else {
        prev.right = newNode;
      }
    }
  
    return root;
  };
  