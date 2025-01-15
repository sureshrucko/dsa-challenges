function bubbleSort(nums: number[]) : number[] {
    for(let i = 0; i < nums.length; i++) {
        console.log('i'+ nums[i])
        for(let j = 0; j < nums.length - i - 1; j++) {
            let temp = nums[j];
            if(nums[j] > nums[j + 1]) {
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
            console.log('j'+ nums[j])
        }
    }
    return nums;
}

const bubbleSortResult = bubbleSort([1,4,66,87,12,56]);
console.log(bubbleSortResult)