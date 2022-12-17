/* Importing the two-sum.js file. */
const twoSum = require("./two-sum");

test("finds correct indices for two numbers that sum to target", () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test("returns empty array if no two numbers sum to target", () => {
  const nums = [2, 7, 11, 14];
  const target = 22;
  expect(twoSum(nums, target)).toEqual([]);
});

test("returns empty array if input array has less than two elements", () => {
  const nums = [2];
  const target = 22;
  expect(twoSum(nums, target)).toEqual([]);
});

test("handles negative numbers in input array", () => {
  const nums = [-5, 7, -2, 15];
  const target = -7;
  expect(twoSum(nums, target)).toEqual([0, 2]);
});

// const { twoSum } = require("./two-sum");

// describe("twoSum", () => {
//   it("should return the indices of the two numbers that add up to the target", () => {
//     const nums = [2, 7, 11, 15];
//     const target = 9;
//     expect(twoSum(nums, target)).toEqual([0, 1]);
//   });

//   it("should return an empty array if no two numbers add up to the target", () => {
//     const nums = [3, 5, 6, 8];
//     const target = 10;
//     expect(twoSum(nums, target)).toEqual(undefined);
//   });

//   it("should return the indices of the two numbers that add up to the target when the target is 0", () => {
//     const nums = [0, 2, -2, 5, -5];
//     const target = 0;
//     expect(twoSum(nums, target)).toEqual([1, 2]);
//   });
// });
