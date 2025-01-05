function palindromNumber(num: Number) {
    return num == Number(String(num).split('').reverse().join(''));
}

function palindromValid(str:string) { 
    let finalString: string = str.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();
    let start = 0;
    let last = finalString.length - 1;

    while(start < last) {
        if(finalString[start] != finalString[last]) {
            return false;
        }
        start++;
        last--;
    }
    return true;
}

const result = palindromValid('A man, a plan, a canal: Panama');
console.log(result);