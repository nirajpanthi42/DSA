
//Question:swap a element if there is a zero element
//input:[1,0,1,0,0,1,1,0,0]
//output:[ 0, 0, 0, 0, 0,1, 1, 1, 1]





let arr=[1,0,1,0,0,1,1,0,0];

let i=0;
let j=0;

while(i<arr.length){
    if(arr[i]==0){
        let temp=arr[i];
        arr[i]=arr[j]
        arr[j]=temp
    j++
    }
    i++
}

console.log(arr);
