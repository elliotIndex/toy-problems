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
const tree6 = new Tree(6);
const tree7 = new Tree(7);
const tree8 = new Tree(8);
const tree9 = new Tree(9);

tree2.left = tree1;
tree2.right = tree8;
tree8.right = tree9;
tree8.left = tree5;
tree5.left = tree3;
tree3.right = tree4;
tree5.right = tree7;
tree7.left = tree6;

//   2
// 1   8
//    5  9
//  3  7
//   46
const treePaths = (tree, currentPath = [], paths = []) => {
  currentPath.push(tree.val);
  if (!(tree.left || tree.right)) {
    paths.push(currentPath.slice(0));
  }
  if (tree.left) {
    treePaths(tree.left, currentPath, paths);
    currentPath.pop();
  }
  if (tree.right) {
    treePaths(tree.right, currentPath, paths);
    currentPath.pop();
  }
  return paths;
};

console.log(JSON.stringify(treePaths(tree2)));
const soln = [[2, 1], [2, 8,5,3,4], [2,8,5,7,6], [2,8,9]];
console.log(JSON.stringify(soln));
