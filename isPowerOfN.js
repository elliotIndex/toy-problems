

const isPowerOfN = function () {
  const storage = {};
  return function(a, n) {
    if (storage[n] && storage[n][a]) {
      return true;
    }
    for (var i = 1; i < a; i *= n) {}
    if (i === a) {
      storage[n] = storage[n] ? storage[n] : {};
      storage[n][a] = true;
      return true;
    }
    return false;
  }
}();

for (var i = 0; i < 100000; i++) {
  if (isPowerOfN(i, 2)) {
    console.log(i);
  }
}

for (var i = 0; i < 100000; i++) {
  if (isPowerOfN(i, 2)) {
    console.log(i);
  }
}
