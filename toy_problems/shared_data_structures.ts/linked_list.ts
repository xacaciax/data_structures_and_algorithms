import ListNode from './linked_list_node.ts';
  
  class LinkedList<T> {
    head: ListNode | null;
  
    constructor() {
      this.head = null;
    }
  
    // Add a new node to the end of the linked list
    append(val): void {
      const newNode = new ListNode(val);
  
      if (!this.head) {
        this.head = newNode;
      } else {
        let current: ListNode | null = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Remove the first occurrence of a node with the given val
    remove(val): void {
      if (!this.head) {
        return;
      }
  
      if (this.head.val === val) {
        this.head = this.head.next;
        return;
      }
  
      let current: ListNode | null = this.head;
      while (current.next) {
        if (current.next.val === val) {
          current.next = current.next.next;
          return;
        }
        current = current.next;
      }
    }
  
    // Display the elements of the linked list
    display(): void {
      const result: any[] = [];
      let current: ListNode | null = this.head;
      while (current) {
        result.push(current.val);
        current = current.next;
      }
      console.log(result.join(' -> '));
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList<number>();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  
  linkedList.display(); // Output: "1 -> 2 -> 3"
  linkedList.remove(2);
  linkedList.display(); // Output: "1 -> 3"
  