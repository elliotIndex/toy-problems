function isSubsetOf(inputArray, targetArray) {
  const inputObject = inputArray.reduce((acc, cur) => acc.add(cur), new Set());
  return targetArray.reduce((acc, cur) => acc && inputObject.has(cur), true);
}
