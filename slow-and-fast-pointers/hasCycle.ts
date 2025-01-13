// https://leetcode.com/problems/linked-list-cycle/description/

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function createLinkedList(arr: number[], pos: number = -1): ListNode | null {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let current = head;
    let cycleNode: ListNode | null = null;

    // Create the linked list
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
        if (i === pos) cycleNode = current; // Mark the node where the cycle starts
    }

    // If pos >= 0, create a cycle
    if (pos >= 0 && cycleNode) {
        current.next = cycleNode;
    }

    return head;
}



function hasCycle(head: ListNode | null): boolean {
    let slow : ListNode | null  = head;
    let fast : ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
        if(slow === fast) {
            return true;
        }
    }
    return false;
};

// Test the functions
const linkedList = createLinkedList([3, 2, 0, -4], -1); // Create a linked list with a cycle at index 1
const hasCycleResult = hasCycle(linkedList);

console.log(hasCycleResult); // Output: true