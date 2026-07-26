// question:find a second min element of  a array 
//input:[10,8,5,80,90,100,120]
//ouput:8




let arr=[10,8,5,80,90,100,120]

let firstmin=Math.min(arr[0],arr[1]);
let secondmin=Math.min(arr[0],arr[1]);

for(let i=2;i<arr.length;i++){
    
    if(firstmin>arr[i]){
      secondmin=firstmin
      firstmin=arr[i]

    }else if(arr[i]>secondmin){
        
    }
   

   
}

console.log(secondmin)



