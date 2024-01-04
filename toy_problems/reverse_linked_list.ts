import  ListNode  from './shared_data_structures.ts/linked_list_node.ts';

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export default function reverseListIterative(head: ListNode | null): ListNode | null {
    let prev = null;
    let cur = head; 
    while (cur != null) {
        let nextNode = cur.next; 
        cur.next = prev; 
        prev = cur; 
        cur = nextNode; 
    }

    return prev; 
};

function reverseListRecursive(head: ListNode | null): ListNode | null {
    if (head == null || head.next == null) return head; 

    let  reversedSublist: ListNode = reverseListRecursive(head.next);
    head.next.next = head; 
    head.next = null; // set current node next to null

    return reversedSublist; 
}