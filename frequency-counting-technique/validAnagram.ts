// https://leetcode.com/problems/valid-anagram
function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length) {
        return false;
    }
    let first = new Map<string,number>();
    let second = new Map<string,number>();

    for(let i = 0; i < s.length; i++) {
        if(first.has(s[i])) {
            let value = first.get(s[i]) ?? 0;
            first.set(s[i],value + 1)
        } else {
            first.set(s[i],1);
        }
    }
    for(let i = 0; i < t.length; i++) {
        if(second.has(t[i])) {
            let value = second.get(t[i]) ?? 0;
            second.set(t[i],value + 1)
        } else {
            second.set(t[i],1);
        }
    }

    for(let i = 0; i < s.length; i++) {
        if(first.get(s[i]) != second.get(s[i])) {
            return false;
        }
    }

    return true;
};

function isAnagram1(s: string, t: string): boolean {
    if(s.length != t.length) {
        return false;
    }
    let countInfo = new Map<string,number>()
    for(let i = 0; i < s.length; i++) {
        countInfo.set(s[i],(countInfo.get(s[i]) ?? 0) + 1);
        countInfo.set(t[i],(countInfo.get(t[i]) ?? 0) - 1);
    }
    for(let count of countInfo.values()) {
        if(count != 0) {
            return false;
        }
    }
    return true;
}



let isAnagramResult = isAnagram1('anagram','nagaram')
console.log(isAnagramResult)