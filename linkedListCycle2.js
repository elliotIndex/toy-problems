// actually linked list 2

var linkedListCycle = function(head) {
  // do a tortise/hare thing
  if (!head) {
    return null;
  }
  var tortiseCount = 0;
  var tortHareMeet = null;
  var tortise = head;
  var hare = head.next;
  while (!tortHareMeet && hare && hare.next && tortiseCount < 25) {
    hare = hare.next;
    if (tortise === hare) {
      tortHareMeet = hare;
    } else {
      tortise = tortise.next;
      tortiseCount++;
      hare = hare.next;
      if (tortise === hare) {
        tortHareMeet = hare;
      }
    }

  }
  if (!tortHareMeet) {
    return null;
  }
  hare = hare === tortHareMeet ? hare.next : hare;
  tortise = head;
  var circumference = 1;
  while (hare != tortHareMeet && circumference < 100) {
    hare = hare.next;
    circumference++;
  }
  while (circumference > tortiseCount) {
    hare = hare.next;
    circumference--;
  }
  while (tortiseCount > circumference) {
    tortise = tortise.next;
    tortiseCount--;
  }
  for (var i = 0; i < 1000 && tortise !== hare; i++) {
    tortise = tortise.next;
    hare = hare.next;
  }
  return hare.val;
};

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
node10.next = node10;
