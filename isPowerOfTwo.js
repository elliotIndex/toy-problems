/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  var hit = false;
  while (n > 0) {
    if (n & 1) {
      if (hit) {
        return false;
      }
      hit = true;
    }
    n = n >> 1;
  }
  return hit;
};

console.log(isPowerOfTwo(4));
