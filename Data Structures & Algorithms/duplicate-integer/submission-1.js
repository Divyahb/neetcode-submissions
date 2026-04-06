class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numsSet = new Set(nums);
        console.log(numsSet)
        return numsSet.size !== nums.length;
    }
}
