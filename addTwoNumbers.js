function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/


var addTwoNumbers = function(l1, l2) {
  var carry = 0;
  var ones = 0;
  var head;
  var curr = head;

  while (l1 || l2) {
      ones = ((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry) % 10;
      carry = Math.floor(((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry) / 10);
      if (head) {
          curr.next = new ListNode(ones);
      } else {
          head = new ListNode(ones);
          curr = head;
      }

      l1 = l1 && l1.next;
      l2 = l2 && l2.next;
  }
  return head;
};



console.log()
