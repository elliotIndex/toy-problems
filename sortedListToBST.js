class Tree {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const sortedListToBST = (arr, start = 0, end = arr.length) => {
  if (end < start) {
    return null;
  }
  const middle = Math.floor((start + end)/2);
  const tree = new Tree(arr[middle]);
  tree.left = sortedListToBST(arr, start, middle - 1);
  tree.right = sortedListToBST(arr, middle + 1, end);
  return tree;
}

const bst = sortedListToBST([1,3,4,5,7,10,12]);
console.log(bst.right.left)
