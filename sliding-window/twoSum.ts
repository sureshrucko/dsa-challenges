// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    let valuelist = new Map<number,number>();
    for(let i = 0; i< nums.length; i++) {
        const valueSubstraction = target - nums[i];
        if(valuelist.has(nums[i])) {
            return [valuelist.get(nums[i])!, i]
            break;
        }
        valuelist.set(valueSubstraction,i)
    }
    return [];
};

const twoSumresult = twoSum([1,3,5,7,4],11);
console.log(twoSumresult);