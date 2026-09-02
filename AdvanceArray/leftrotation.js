//Question Leftrotation 
//output: [2, 3, 4, 5, 1]


 //step 1:  // arra=element+1
   //step 2: //now shift the first element to the last position  
               // create a copy of the first element and store it in a variable and then shift the elements to the left and finally assign the copy to the last position of the array.



let arr=[1,2,3,4,5]

let copy=arr[0];
console.log(copy);



for(let i=0;i<arr.length-1;i++){

arr[i]=arr[i+1];

}

arr[arr.length-1]=copy;
console.log(copy);



console.log(arr);
