//Question: reverse a array element without creating a space 
//input:[1,2,3,4,5]
//output:[ 5, 4, 3, 2, 1 ]



let arr=[1,2,3,4,5]

let j=arr.length-1;
let i=0

while(i!=j){

    let temp=arr[i];
arr[i]=arr[j]
arr[j]=temp
i++
j--
}
    


console.log(arr);

