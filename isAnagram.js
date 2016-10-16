function isAnagram(s, t) {

    var sArr = s.split('').sort();
    var tArr = t.split('').sort();

    if (sArr.length !== tArr.length) {
        return false;
    }

    for (var i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) {
            return false;
        }
    }

    return true;
};

console.log(isAnagram(anagram, nagaram));
