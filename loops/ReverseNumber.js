
// question:revers 123 
//input:123
//output:321




function reverseNumber(n) {

     let rev = 0;

     while (n > 0) {
          let rem = n % 10;
          rev = rev * 10 + rem;
          n = Math.floor(n / 10)

     }
     console.log(rev);


}
reverseNumber(123)



