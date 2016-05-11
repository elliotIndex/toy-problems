function Tree(val) {
  this.val = val;
  this.children = [];
}

var tree1 = new Tree(1);

var tree2 = new Tree(2);
var tree7 = new Tree(7);
var tree6 = new Tree(6);

tree1.children.push(tree2);
tree1.children.push(tree7);
tree1.children.push(tree6);

var tree5 = new Tree(5);
var tree12 = new Tree(12);
var tree4 = new Tree(4);
var tree16 = new Tree(16);
var tree19 = new Tree(19);
var tree38 = new Tree(38);

tree2.children.push(tree5);
tree2.children.push(tree12);
tree2.children.push(tree4);

tree7.children.push(tree16);

tree6.children.push(tree19);
tree6.children.push(tree38);

var tree85 = new Tree(85);
var tree61 = new Tree(61);
var tree9 = new Tree(9);
var tree95 = new Tree(95);

tree5.children.push(tree85);
tree12.children.push(tree61);
tree16.children.push(tree9);
tree19.children.push(tree95);

var tree17 = new Tree(17);

tree9.children.push(tree17);

module.exports = tree1;
