
//check prime number 

//input:7
//outout:true



function checkprimeNumber() {

    let n = 7

    var prime = true
    console.log(prime);

    for (let i = 2; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            console.log(false)
        }


    }
}

checkprimeNumber()


