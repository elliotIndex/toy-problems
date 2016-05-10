/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // have a lead pointer and a trail pointer
  var trail = 0;
  var currLetters = {};
  var count = 0;
  var max = 0;
  for (var lead = 0; lead < s.length; lead++) {
    // the lead pointer adds to the set
    if (currLetters[s[lead]]) {
      // trail pointer counts forward until it encounters currLetters[s[lead]]
      while (s[trail] !== s[lead]) {
        currLetters[s[trail]]--;
        trail++;
        count--;
      }
      if (trail !== lead) {
        currLetters[s[trail]]--;
        trail++;
        count--;
      }
    } else {
      // increment current
      currLetters[s[lead]] = 1;
      count++;
      // check if it is new longest
      max = Math.max(count, max);
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring('bbazabba'), 3);
