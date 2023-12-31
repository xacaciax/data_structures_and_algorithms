import BinaryTreeNode from "./tree_node";

/**
 * @param {BinaryTreeNode} root
 * @param {int32} value
 * @return {bool}
 */
function search_node_in_bst(root, value) {
    let curr = root; 
    while (curr !== null) {
        if (value === curr.value) {
            return true;
        } else if (value < curr.value) {
            curr = curr.left; 
        } else {
            curr = curr.right; 
        }
    }
    return false;
}

export default search_node_in_bst;

