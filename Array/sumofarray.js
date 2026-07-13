
//question sum of array elements 
//input: [1,2,3,4,5]
//output:15


const prompt = require("prompt-sync")({sigint:true});

let arr= new Array(5);

let sum=0;

for(let i=0;i<arr.length;i++){

    arr[i]=Number(prompt("enter the value of array "));
   sum=sum+arr[i];
}

console.log(sum);
