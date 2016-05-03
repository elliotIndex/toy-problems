class LinkedList {
  constructor() {
    this.head = null;
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const list = new LinkedList();

const node1 = new Node(1);
const nodeA = new Node("A");
const nodeP = new Node('P');
const node124 = new Node(124);

list.head = node1;
node1.next = nodeA;
nodeA.next = nodeP;
nodeP.next = node124;

for (let i = list.head; i; i = i.next) {
  console.log(i.val);
}
