// Given a string of words, return the longest word[s].
// String will never be empty and you do not need to account for different data types.

const longestWord = str =>{
    const strArr = str.split(' ');
    let max = strArr[0].length;
    let index = 0;
    for(let i=1; i< strArr.length; i++)
        if(strArr[i].length > max){
            max = strArr[i].length ;
            index = i;
        }
    return strArr[index];
}

console.log (longestWord('brurya is student'));