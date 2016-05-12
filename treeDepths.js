const treeDepths = tree => {
  const result = [];
  let queue = [tree];
  let current = '*';
  while (queue.length) {
    if (current === '*') {
      result.push([]);
      queue.push('*'); // make sure to handle last one
    } else if (queue.length) {
      result[result.length - 1].push(current.val);
      queue = queue.concat(current.children);
    }
    current = queue.shift();
  }
  return result;
}
