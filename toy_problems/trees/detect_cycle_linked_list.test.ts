import  ListNode  from '../shared_data_structures.ts/linked_list_node.ts';
import  hasCycle  from './detect_cycle_linked_list.ts';

describe('hasCycle tests', () => {
    test('Empty list should not have a cycle', () => {
        expect(hasCycle(null)).toBe(false);
    });

    test('Single node without cycle', () => {
        const node = new ListNode(1);
        expect(hasCycle(node)).toBe(false);
    });

    test('Single node with a cycle to itself', () => {
        const node = new ListNode(1);
        node.next = node;
        expect(hasCycle(node)).toBe(true);
    });

    test('Multiple nodes with no cycle', () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        node1.next = node2;
        expect(hasCycle(node1)).toBe(false);
    });

    test('Multiple nodes with a cycle', () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        const node3 = new ListNode(3);
        node1.next = node2;
        node2.next = node3;
        node3.next = node2; // Creating a cycle
        expect(hasCycle(node1)).toBe(true);
    });
});
