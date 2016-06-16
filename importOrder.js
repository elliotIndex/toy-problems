
function importOrder(requirements) {
  const relations = {};
  const output = [];

  requirements.forEach(tuple => {
    relations[tuple[0]] = relations[tuple[0]] || { parent: null, children: []};
    relations[tuple[1]] = relations[tuple[1]] || { parent: null, children: []};

    relations[tuple[0]].parent = tuple[1];
    relations[tuple[1]].children.push(tuple[0]);
  });

  const result = [];
  let parent;
  for (var dependency in relations) {
    parent = relations[dependency].parent;
    if (parent && relations[parent].parent === null) {
      result.push.apply(result, getSubDependencies(dependency, relations));
    }
  }
  return result;
}

function getSubDependencies(dependency, relations) {
  let result = [dependency]

  let subDependencies;
  for (var i = 0; i < relations[dependency].children.length; i++) {
    subDependencies = getSubDependencies(relations[dependency].children[i], relations);
    result.push.apply(result, subDependencies);
  }

  return result;
}

console.log(importOrder([['b', 'a'], ['c','z'], ['z','d'],['d','c'],['f','q'],['q', 'b'],['m','q']]))
// should print ['b', 'q', 'f', 'm']
