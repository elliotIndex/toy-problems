var isSameTree = (a, b) => {
  if (a && b) {
    return a.val === b.val
    && isSameTree(a.left, b.left)
    && isSameTree(a.right, b.right);
  }
  return !(a || b);
};

class Tree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var t1 = new Tree(1);
var t2 = new Tree(2);
var t3 = new Tree(3);
var t4 = new Tree(4);
var t5 = new Tree(5);
var t6 = new Tree(6);

t4.left = t2;
t2.left = t1;
t2.right = t3;
t4.right = t6;
t6.left = t5;

var copyT4 = t4;
var copyT2 = t2;

console.log(isSameTree(t4, copyT4));
console.log(!isSameTree(t4, copyT2));
