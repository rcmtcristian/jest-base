var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const currNum = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      const secondNum = nums[j];

      if (currNum + secondNum === target) {
        return [i, j];
      }
    }
  }
};

module.exports = twoSum;
