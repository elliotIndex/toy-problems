class Tree {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

const tree1 = new Tree(1);
const tree2 = new Tree(2);
const tree3 = new Tree(3);
const tree4 = new Tree(4);
const tree5 = new Tree(5);


      // 3
  //  1     4
  //   2     5
const head = tree3;
tree3.left = tree1;
tree1.right = tree2;
tree3.right = tree4;
tree4.right = tree5;

// in-order traversal of tree
const inOrderTraversal = (tree, callback) => {
  tree.left && inOrderTraversal(tree.left, callback);
  callback(tree);
  tree.right && inOrderTraversal(tree.right, callback);
}

const pinToList = (list, tree) => {
  list.head = list.head || tree;
  list.tail = list.tail || tree;
  tree.prev = list.tail;
  tree.next = list.head;
  list.tail.next = tree;
  list.head.prev = tree;
  list.tail = tree;
}

const bstToLinkedList = tree => {
  const list = { head: null, tail: null }
  inOrderTraversal(tree, pinToList.bind(null, list));
  return list;
}

const test = bstToLinkedList(head);

let flag = true;
let node = test.head;
while (node !== test.head || flag) {
  flag = false;
  console.log(node.val);
  node = node.next;
}
