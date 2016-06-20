/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  var digits = new Set();
  var max = Math.pow(10, n);
  var numStr;
  var count = max;
  for (var i = 0; i < max; i++) {
    numStr = '' + i;
    for (var j = 0; j < numStr.length; j++) {
      if (digits.has(numStr[j])) {
        count--;
        break;
      } else {
        digits.add(numStr[j]);
      }
    }
    digits.clear();
  }
  return count;
};

console.log(countNumbersWithUniqueDigits(3));
