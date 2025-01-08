function maxSubArraySizeK(nums: number[],k: number): number {
    let maxSum: number = 0;
    let start: number = 0;
    let currentSum = 0;
    const item = new Set<number>();

    for(let end=0; end < nums.length;end++) {
        const currentValue = nums[end];

        // Shrink the window if the current number is a duplicate or window size exceeds `k`
        while(item.has(currentValue) || item.size >= k) {
            currentSum -= nums[start];
            item.delete(nums[start]);
            start++; // Move the start pointer
        }

        // Add the current number to the window
        currentSum += currentValue;
        item.add(currentValue);

        // Check if the current window has exactly `k` elements
        if(item.size === k) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }
    return maxSum;
}
const data = maxSubArraySizeK([1,5,4,2,9,9,9],3)
console.log(data)
