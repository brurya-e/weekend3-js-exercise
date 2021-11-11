// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

const repeatStr = (n, str) =>{
    let temp ='';
    for(let i=0; i<n ;i++)
        temp+=str;
    return temp;
}

console.log(repeatStr(5,'hello'));
console.log(repeatStr(6, "I"));