//question: right rotation 
//input:[1,2,3,4,5]
//output:[5,1,2,3,4]

//step 1: //array=element-1
//step 2: //now shift the last element to the first position  
            // create a copy of the last element and store it in a variable and then shift the elements to the right and finally assign the copy to the first position of the array.


let arr=[1,2,3,4,5]

let copy=arr[4];
console.log(copy);

for(let i=4;i>0;i--){
    arr[i]=arr[i-1];
}

arr[0]=copy;

console.log(arr);
