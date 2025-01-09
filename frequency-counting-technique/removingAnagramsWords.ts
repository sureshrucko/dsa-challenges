//https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/description/
function removeAnagramWords(words:string[]) {
    let previousWord = ''
    let result: string[] = [];

    for(let word of words) {
        let signature = word.split('').sort().join('');
        if(previousWord === signature) continue;

        previousWord = signature;
        result.push(signature);
    }
    return result ?? []
}

const anagramResult = removeAnagramWords(["abba","baba","bbaa","cd","cd"]);
console.log(anagramResult);