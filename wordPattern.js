
var wordPattern = function(pattern, str) {
    const patternArr = pattern.split('');
    const words = str.split(' ');
    if (patternArr.length !== words.length) {
      return false;
    }
    const patternToStr = {};
    const strToPattern = {};
    for (let i = 0; i < words.length; i++) {
      if (patternToStr[patternArr[i]] && patternToStr[patternArr[i]] !== words[i]) {
        return false;
      } else if (strToPattern[words[i]] && strToPattern[words[i]] !== patternArr[i]) {
        return false;
      } else {
        patternToStr[patternArr[i]] = words[i];
        strToPattern[words[i]] = patternArr[i];
      }
    }
    return true;
};

console.log(wordPattern('abba', "dog cat cat dog"));
console.log(!wordPattern('abba', "dog cat cat fish"));
console.log(!wordPattern('aaaa', 'dog cat cat dog'));
console.log(!wordPattern('abba', 'dog dog dog dog'));
