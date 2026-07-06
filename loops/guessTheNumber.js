
//Question guess  the Number 
//input:guess Number (guess);
//output:your guess(Number===random)



function guessNumber(){
    
   let random = 20
let guess=0

while(guess!==random){

    if (guess < 1 || guess > 100) {
            console.log("Enter a number between 1 and 100");
        }
        
if(guess>random){
    console.log("it to high")
}

if(guess<random){
    console.log("it to low")
}

if (Math.abs(guess - random) <= 5) {
    console.log("So close!");
}
 guess = Number(prompt("Try again"));

}

}


guessNumber()