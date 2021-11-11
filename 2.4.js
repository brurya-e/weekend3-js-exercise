// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

const arr1 = [ 1, 1, 1, 2, 1, 1 ];
const arr2 = [ 0, 0, 0.55, 0, 0 ];

const findUniq = (arr) =>{

    let same = arr[0];
    if (arr[0]!=arr[1] && arr[0]!=arr[2])
        return arr[0];
    for(let i = 1; i< arr.length; i++){
        if (arr[i] != same)
            return arr[i];
    }
}

console.log(findUniq(arr2));