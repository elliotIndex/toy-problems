const sumPairs = (arr, target) => {
  const lookingFor = {};
  return arr.reduce((result, item) => {
    if (item in lookingFor) {
      result.push([lookingFor[item], item]);
    } else {
      lookingFor[target-item] = item;
    }
    return result;
  }, []);
}

console.log(JSON.stringify(sumPairs([-1,4,2,8,3,11,9,-4], 7)));
