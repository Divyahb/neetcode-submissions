class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const numsObj = {};
      for(let i = 0; i < nums.length; i++){
         const diff = target - nums[i];
         if(numsObj.hasOwnProperty(diff)) return [i, numsObj[diff]]
         numsObj[nums[i]] = i;
      }

      console.log(numsObj)
      return [-1, -1]
    }
}
