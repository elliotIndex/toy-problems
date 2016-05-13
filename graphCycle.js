'use-strict'

const graph1 = {
  'a': ['b'],
  'b': ['a'],
};

const graph2 = {
  'a': ['b'],
  'b': [],
};

const graph3 = {
  'a': ['b'],
  'b': ['c'],
  'c': ['a'],
};


const graph4 = {
  'a': ['d'],
  'b': ['d'],
  'c': ['e'],
  'd': ['e'],
  'e': [],
  'f': ['g']
};

const graph5 = {
  'a': ['b', 'c'],
  'b': ['d'],
  'c': ['d'],
  'd': [],
}

const graphCycle = graph => {
  const deadEnds = {};
  const q = [];
  let currentNode;
  for (let startNode in graph) {
    q.push.apply(q, graph[startNode]);
    while (q.length) {
      currentNode = q.shift();
      if (!deadEnds[currentNode]) {
        if (currentNode === startNode) {
          return true;
        }
        q.push.apply(q, graph[currentNode]); // add all connected nodes to q
      }
    }
    // add all nodes in currentTraversal to deadEnds
    deadEnds[startNode] = true;
  }
  return false;
};

console.log(graphCycle(graph1));
console.log(!graphCycle(graph2));
console.log(graphCycle(graph3));
console.log(!graphCycle(graph5));
