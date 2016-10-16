function caesarsCipher(str) {
  var newStr = [];

  for (var i = 0; i < str.length; i++) {

    if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
      newStr.push(str.charAt(i));
    } else if (str.charCodeAt(i) > 77) {
      newStr.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      newStr.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }

  return newStr.join('');
};

console.log(caesarsCipher('GNAARE'))
