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
  return [];
};

module.exports = twoSum;

// module.exports = {
//   twoSum: function (nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//       const currNum = nums[i];

//       for (let j = i + 1; j < nums.length; j++) {
//         const secondNum = nums[j];

//         if (currNum + secondNum === target) {
//           return [i, j];
//         }
//       }
//     }
//   },
// };

// The complexity of the twoSum function is O(n^2), or quadratic time. This is because the function has two nested loops that both iterate over the entire nums array.

// The outer loop has a complexity of O(n), because it runs once for each element in the nums array. The inner loop also has a complexity of O(n), because it also runs once for each element in the nums array.

// Since the inner loop is nested within the outer loop, the overall complexity of the function is the product of the two complexities, which is O(n * n) = O(n^2).

// In general, quadratic time complexity is considered less efficient than linear time complexity (O(n)), because the time it takes to execute a quadratic algorithm grows significantly as the size of the input data increases. For example, if the nums array has 10 elements, the twoSum function will have to make 100 comparisons (10 * 10). If the nums array has 100 elements, the function will have to make 10,000 comparisons (100 * 100).
