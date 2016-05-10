/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var compliments = {};
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in compliments) {
      return [compliments[nums[i]], i];
    } else {
      compliments[target - nums[i]] = i;
    }
  }
  return null;
};
