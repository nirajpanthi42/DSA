
//question find a second max element in a array
//input: [2,3,4,6]
//output:4

let arr=[2,3,4,6];

let max=Math.max(arr[0],arr[1]);

let secmax=Math.min(arr[0],arr[1]);


for(let i=2;i<arr.length;i++){
    if(arr[i]>max){
       secmax=max;
       max=arr[i];
    }else if(arr[i]>secmax){
        secmax=arr[i]
    }
}

console.log(secmax);


