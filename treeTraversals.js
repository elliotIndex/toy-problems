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

const print = (tree, order) => {
  var result = [];
  order(head, tree => result.push(tree.val));
  return result.join(', ');
}
// in-order traversal of tree
const inOrderTraversal = (tree, callback) => {
  tree.left && inOrderTraversal(tree.left, callback);
  callback(tree);
  tree.right && inOrderTraversal(tree.right, callback);
}

var printInOrder = tree => {
  var result = [];
  inOrderTraversal(head, tree => result.push(tree.val));
  return result.join(', ');
}

// 1 2 3 4 5

const preOrderTraversal = (tree, callback) => {
  callback(tree);
  tree.left && preOrderTraversal(tree.left, callback);
  tree.right && preOrderTraversal(tree.right, callback);
}

// 3 1 2 4 5

preOrderTraversal(head, tree => console.log(tree.val));

const postOrderTraversal = (tree, callback) => {
  tree.left && postOrderTraversal(tree.left, callback);
  tree.right && postOrderTraversal(tree.right, callback);
  callback(tree);
}

//

postOrderTraversal(head, tree => console.log(tree.val));
// 2 1 5 4 3
