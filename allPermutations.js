const allPermutations = str => {
  if (!str) {
    return [''];
  }
  const results = [];
  const currentChar = str[0];
  const submutations = allPermutations(str.slice(1));
  for (let submutation of submutations) {
    for (var i = 0; i <= submutation.length; i++) {
      results.push(submutation.slice(0,i) + currentChar + submutation.slice(i));
    }
  }
  return results;
}

console.log(JSON.stringify(allPermutations('abcd')));
