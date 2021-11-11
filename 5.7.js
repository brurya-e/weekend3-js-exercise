// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

const shortestWord = str =>{
    const strArr = str.split(' ');
    let min = strArr[0].length;
    for(let i=1; i< strArr.length; i++)
        if(strArr[i].length < min)
            min = strArr[i].length ;
    return min;
}

console.log (shortestWord('brurya is student'));