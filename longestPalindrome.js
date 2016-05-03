const longestPalindrome = string => {
  let longest = '';
  let currentPal = '';
  // iterate along string
  for (var i = 0; i < string.length; i++) {
    if (string[i+1] && string[i] === string[i+1]) {
      currentPal = expandOutward(string, i, i+1);
    } else {
      currentPal = expandOutward(string, i);
    }
    longest = currentPal.length > longest.length ? currentPal : longest;
  }
  return longest;
}

const expandOutward = (string, leftSeed, rightSeed) => {
  let pal;
  if (rightSeed) {
    pal = string[leftSeed--] + string[rightSeed++];
  } else {
    pal = string[leftSeed];
    rightSeed = 1 + leftSeed--;
  }

  while (leftSeed >= 0 && rightSeed < string.length && string[leftSeed] === string[rightSeed]) {
    pal = string[leftSeed--] + pal + string[rightSeed++];
  }
  return pal;
}

console.log(longestPalindrome('aasdfasdfffs'));
