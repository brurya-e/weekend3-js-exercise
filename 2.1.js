// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive i ntegers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const arr1 = [10, 343445353, 3453445, 3453545353453];
const arr2 = [19, 5, 42, 2, 77];

const sum2LowestNum = (arr) =>{
    let min1;
    let min2;
    if (arr[0]<arr[1]){
        min1 = arr[0];
        min2 = arr[1];}
    else{
        min1 = arr[1];
        min2 = arr[0];}
    for (let i=2; i<arr.length; i++){
        if(arr[i]<min2){
            if (arr[i]< min1){
                min2=min1;
                min1=arr[i];
            }
            else{
                min2=arr[i]
            }
        }
    }
    return min2+min1;
}

console.log(sum2LowestNum(arr1));
console.log(sum2LowestNum(arr2));