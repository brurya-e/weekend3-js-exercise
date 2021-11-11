// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const toCamelCase =str =>{
    let temp='';
    for(let i =0; i< str.length; i++){
        if(str[i] != '-' && str[i] != '_' )
            temp+=str[i]; 
        else
            temp+=str[++i].toUpperCase();       
    }
return temp;
}

console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));