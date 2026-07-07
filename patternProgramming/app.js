


const prompt=require("prompt-sync")();

function basicpattern(){
    let n=prompt("enter a number");
    for(let i=1;i<=n;i++){
        process.stdout.write("*");
        
    }
}

basicpattern()