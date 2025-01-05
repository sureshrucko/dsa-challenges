// Given a string s, find the length of the longest substring without repeating characters.

// Time Complexcity of below code is O(n)
function lengthOfLongestSubstring(s: string) {
    let charIndexMap = new Map<string, number>(); // To store the last seen index of characters
    let maxLength = 0;
    let start = 0; // Start index of the current window
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        // If the character is already in the map and its index is within the current window
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar)! >= start) {
            start = charIndexMap.get(currentChar)! + 1; // Move the start of the window
        }

        charIndexMap.set(currentChar, end); // Update the last seen index of the character
        maxLength = Math.max(maxLength, end - start + 1); // Update the maximum length
    }

    return maxLength;
};
lengthOfLongestSubstring('abcabcbb');