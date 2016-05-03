/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
   this.val = val;
   this.next = null;
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);
var node6 = new ListNode(6);
var node7 = new ListNode(7);
var node8 = new ListNode(8);
var node9 = new ListNode(9);
var node10 = new ListNode(10);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;
node10.next = node6;

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) { return false; }
    var tortise = head;
    var hare = head.next;
    while (hare && hare.next) {
        hare = hare.next;
        if (tortise === hare) { return hare; }
        hare = hare.next;
        if (tortise === hare) { return hare; }
        tortise = tortise.next;
    }
    return null;
};
console.log(hasCycle(node1));
