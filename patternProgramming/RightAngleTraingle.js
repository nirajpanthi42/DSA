
//print rightangleTraiangle

//output:

// *
// **
// ***
// ***
// ****  /


const prompt=require("prompt-sync")();

let n=prompt("enter a number")

for(let i=0;i<=n;i++){
   for(let j=1;j<=i;j++){
    process.stdout.write("*");
   }
    
   console.log()
}



