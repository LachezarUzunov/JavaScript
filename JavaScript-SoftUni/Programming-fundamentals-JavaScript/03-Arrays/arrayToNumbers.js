function arrayToNums(nums) {
  let condesnedArray = [];

  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      condesnedArray[i] = nums[i] + nums[i + 1];

      // nums.shift();
    }
    nums[i] = condesnedArray[i];
  }

  console.log(condesnedArray);
}

arrayToNums([5, 0, 4, 1, 2]);
arrayToNums([1]);
