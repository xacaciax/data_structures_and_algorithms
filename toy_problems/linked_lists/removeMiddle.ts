import ListNode  from '../shared_data_structures/linked_list_node.ts';

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

// use math.floor when finding "middle"

function deleteMiddle(head: ListNode | null): ListNode | null {
    // single node list
    if (head && head.next == null) return null;

    // two node list
    if (head && head.next && head.next.next == null) {
        head.next = null;
        return head;
    }

    // more than two node list
    let slow: ListNode = head;
    let fast: ListNode = head.next.next;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;

    return head;
}


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

 // use math.floor when finding "middle"

 function deleteMiddle(head: ListNode | null): ListNode | null {

    // single node list
    if(head.next == null) return null;

    // two node list
    if(head.next.next == null) {
        head.next = null;
        return head; 
    };
    
    // more than two node list
    let slow = head;
    let fast = head.next.next;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    slow.next = slow.next.next;
    
    return head; 
};