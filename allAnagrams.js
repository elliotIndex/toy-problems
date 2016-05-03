const allAnagrams = (strings) => {
  const anagramSets = [];
  let inserted;
  for (let word of strings) {
    inserted = false;
    for (let anagramSet of anagramSets) {
      if (areAnagrams(word, anagramSet[0])) {
        anagramSet.push(word);
        inserted = true;
      }
    }
    if (!inserted) {
      anagramSets.push([word]);
    }
  }
  return anagramSets
}

const areAnagrams = (a, b) => {
  if (a.length != b.length) {
    return false;
  }
  const aLetters = {};
  const bLetters = {};
  for (var i = 0; i < a.length; i++) {
    aLetters[a[i]] = aLetters[a[i]] ? aLetters[a[i]]++ : 1;
    bLetters[b[i]] = bLetters[b[i]] ? bLetters[b[i]]++ : 1
  }
  for (let letter in aLetters) {
    if (bLetters[letter] !== aLetters[letter]) {
      return false;
    }
  }
  return true;
}

console.log(allAnagrams(['race', 'cool', 'loco', 'munch', 'rac', 'cera']));
