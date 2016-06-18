var graph = {
  'a': ['b', 'c'],
  'b': ['a', 'c'],
  'c': ['d', 'e','a'],
  'd': [],
  'e': ['a','p'],
  'p': ['a'],
}

function allPaths(graph, start, end, currentPath = '', visited = new Set()) {
  if (visited.has(start)) {
    return null;
  }

  currentPath += start;
  visited.add(start);

  if (start === end) {
    visited.delete(end);
    return currentPath;
  }

  let subpaths;
  const results = graph[start].reduce((results, edge) => {
    subpaths = allPaths(graph, edge, end, currentPath, visited);
    return subpaths ? results.concat(subpaths) : results;
  }, []);
  visited.delete(start);
  return results;
}

console.log(allPaths(graph, 'a', 'p'));
