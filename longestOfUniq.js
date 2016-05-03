
const longestOfUniq = (string, length) => {
  let lead = 0;
  let trail = 0;
  let counts = {};
  let uniqCount = 0;
  let best = '';
  for (let lead = 0; lead < string.length; lead++) {
    if (!counts[string[lead]]) {
      counts[string[lead]] = 0;
      uniqCount++;
      for (; uniqCount > length; trail++) {
        counts[string[trail]]--;
        if (!counts[string[trail]]) {
          uniqCount--;
        }
      }
    }
    counts[string[lead]]++;
    if (lead - trail > best.length - 1) {
      best = string.slice(trail, lead + 1);
    }
  }
  return best;
}

console.log(longestOfUniq('hi buddies! Its elliot, your good friend', 2)); // => ell
console.log(longestOfUniq('money in the bank, teller what would you like to dtrrink?', 3)); // => dtrrr
console.log(longestOfUniq('', 2)); // => ''
