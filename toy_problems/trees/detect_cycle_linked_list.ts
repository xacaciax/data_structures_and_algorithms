import  ListNode  from '../shared_data_structures.ts/linked_list_node.ts';

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

// Hash table solution
export default function hasCycle(head: ListNode | null): boolean {
    const nodesSeen= new Set<ListNode| null>();
    let hasCycle = false; 
    while (head != null) {
        if(nodesSeen.has(head)) {
            hasCycle = true; 
            break; 
        }
        nodesSeen.add(head);
        head = head.next; 
    }
    return hasCycle; 
};

// Floyd's cycle finding algorithm - tortiose and hare
// function hasCycle(head: ListNode | null): boolean {
//     let slow: ListNode = head; 
//     let fast: ListNode = head; 

//     while (fast != null && fast.next != null) {
//         slow = slow.next; 
//         fast = fast.next.next; 
//         if(fast == slow) return true;
//     }
//     return false; 
// }   