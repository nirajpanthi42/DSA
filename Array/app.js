
const prompt=require("prompt-sync")();



function helloWorld() {
   const message=["Hello","world!"];
  console.log(message.join(""));
  
}

helloWorld();


//collaction of data ;

// linear data structure that stores a collection of elements in a contiguous block of memory .




let arr=new Array(5);


for(let i=0;i<arr.length;i++){
    arr[i]=prompt("Enter the value of array at index"+i+":");
}
console.log(arr);
//done
