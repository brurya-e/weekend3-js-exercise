// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

const shortName = str => {
    let res = '';
    res += str[0].toUpperCase();
    for (let i = 0; i < str.length; i++)
        if (str[i] == ' ')
            res += '.' + str[++i].toUpperCase();
    return res;
}
console.log(shortName('Sam Harris'));
console.log(shortName('brurya eshvege'));