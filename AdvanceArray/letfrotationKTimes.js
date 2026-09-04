//Question: left rotate an array k times 
//input: [1,2,3,4,5], k=2
//output:[3,4,5,1,2]

//setp 1: //array=element+1  
//setp 2: //now shift the first element to the last position with the k times and finally assign the copy to the last position of the array.



let arr=[1,2,3,4,5];

let k=2;

let copy=arr[0];

for(let j=0;j<k;j++){

   for(let i=0;i<arr.length-1;i++){
      arr[i]=arr[i+1];
   }

   arr[arr.length-1]=copy;

}


console.log(arr);
