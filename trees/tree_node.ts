export default class BinaryTreeNode {
    value: any;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;

    constructor(value: any) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
