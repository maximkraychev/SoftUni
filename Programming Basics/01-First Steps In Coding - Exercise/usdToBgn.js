function converter(input){
   
    const ONE_USD = 1.79549; 
   
    bgnOutput = Number(input) * ONE_USD;

    console.log(bgnOutput);
}

converter(["12.5"]);