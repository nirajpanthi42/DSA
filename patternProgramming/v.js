
//V pattern

//output:

  //  *   *
    //*  * 
    //* *  
    //**   
    //*   





for(let i=1;i<=5;i++){
    for(let j=1;j<=2*5-1;j++){
        if(5==j || i+j==2*5){
            process.stdout.write("*")
        }else{
              process.stdout.write(" ")
        }
      
        
    }
      console.log();
}