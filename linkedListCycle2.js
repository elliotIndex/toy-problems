// actually linked list 2

const linkedListCycle = (head) => {
  // do a tortise/hare thing
  if (!head) {
    return false;
  }
  var tortiseCount = 0;
  var tortHareMeet = null;
  var tortise = head;
  var hare = head.next;
  while (hare && hare.next) {
    hare = hare.next;
    if (tortise === hare) { tortHareMeet = hare; }
    hare = hare.next;
    if (tortise === hare) { tortHareMeet = hare; }
    tortise = tortise.next;
    tortiseCount++;
  }
  return null;
  // when they reach each other
    // its a merge linkedList problem
      // count the number of nodes it takes to reach the tort/hare point
        // from the tort/hare point
        // from the head
      // give the longer distance a head start equal to the difference between these two
        // count again from head start and smaller of the two
          // compare each node, checking to see if they match
            // return the matching node

}

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
