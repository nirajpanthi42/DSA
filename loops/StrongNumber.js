
//question check the number is a Strong Number or not 
//input:145
//output:Strong Number



function strongnumber(n) {


    let copyn = n;
    var sum = 0;
    while (n > 0) {


        let rem = n % 10;
        console.log(rem);

        let fact = 1



        for (let i = 1; i <= rem; i++) {

            fact = fact * i

        }
        sum = sum + fact;
        n = Math.floor(n / 10);

        console.log(fact);






    }

    console.log(sum);

    if (copyn === sum) {
        console.log("the Number is Strong Number");

    } else {
        console.log("the Number is not a Strong Number");
    }



}
strongnumber(145)
