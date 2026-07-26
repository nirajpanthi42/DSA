//Question:Reveres the array element
//input:[1,2,3,4,5]
//output::[5,4,3,2,1]



let arr=[1,2,3,4,5];
let temp=new Array(5);
let j=0;

for(let i=arr.length-1,j=0;i>=0;i--,j++){
  temp[j]=arr[i]
}


console.log(temp)
