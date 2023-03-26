function changeBureau(input) {

    const BITCOIN = 1168;
    const YUANIN$ = 0.15;
    const DOLLAR = 1.76;
    const EURO = 1.95;
    
    
    let numberBircoins = Number(input[0]);
    let numberYuans = Number(input[1]);
    let commission = Number(input[2]) / 100;

    let inLeva = numberBircoins * BITCOIN + DOLLAR * (numberYuans * YUANIN$);
    let inEuro = inLeva / EURO;
    let totalInEuro = inEuro - (inEuro * commission);

    console.log(totalInEuro.toFixed(2));
}

changeBureau(["20",
"5678",
"2.4"])
