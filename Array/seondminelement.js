// Question: Find the second minimum element in an array
// Input: [2,3,4,6]
// Output: 3

let arr = [2, 3, 4, 6];

let min = arr[0];
let secmin = Infinity;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        secmin = min;
        min = arr[i];
    } else if (arr[i] > min && arr[i] < secmin) {
        secmin = arr[i];
    }
}

console.log(secmin);