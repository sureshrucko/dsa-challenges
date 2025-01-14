function linearSerach(nums: number[],target: number) : number {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i;
        }
    }
    return -1;
}

const linearSearchResult = linearSerach([2,4,1,9,7,6],9);
console.log(linearSearchResult)