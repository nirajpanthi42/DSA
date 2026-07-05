
function strongnumber(n){


    let copyn=n;
  
while(n>0){


let rem=n%10;
console.log(rem);

let fact=1

for(let i=1;i<=rem;i++){
    
    fact=fact*i
    
}

n=Math.floor(n/10);


console.log(fact);



   
}


    


}
strongnumber(234)
