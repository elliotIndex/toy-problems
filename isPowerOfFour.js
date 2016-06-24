function isPowerOfFour(n) {
  for (; n; n = n >> 2) {
    if (n === 1) {
      return true;
    }
    if (n & 3) {
      return false;
    }
  }
  return false;
};

for (var i = 0; i < 20; i++) {
  console.log(isPowerOfFour(Math.pow(3,i)), Math.pow(3,i));
}
