//Question: right rotation K times 
//input:[1,2,3,4,5] k=2
//ouput:[4,5,1,2,3]

//step 1: array=element-1
//step 2: now shift the last element to the first position with the k times and finally assign the copy to the first position of the array.

let arr=[1,2,3,4,5];
 let k=2;

for(let j=0;j<k;j++){
let copy=arr[arr.length-1];
for(let i=arr.length-1;i>0;i--){
arr[i]=arr[i-1];

}
arr[0]=copy;
}

console.log(arr);