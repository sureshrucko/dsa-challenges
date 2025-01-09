// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    let valueList = new Map<number,number>();
    for(let i = 0; i< nums.length; i++) {
        const currentValue = target - nums[i];
        if(valueList.has(nums[i])) {
            return [valueList.get(nums[i])!, i]
            break;
        }
        valueList.set(currentValue,i)
    }
    return [];
};

const twoSumResult = twoSum([1,3,5,7,4],11);
console.log(twoSumResult);