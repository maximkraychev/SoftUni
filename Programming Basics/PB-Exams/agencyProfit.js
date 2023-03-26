function agencyProfit(input) {

    let companyName = input[0];
    let numberOfTicketsForAdult = Number(input[1]);
    let numberOfTicketsForKids = Number(input[2]);
    let ticketPriceForAdult = Number(input[3]);
    let priceServiceFee = Number(input[4]);

    let ticketPriceForKids = ticketPriceForAdult * 0.30;
    
    let numberServiceFee = numberOfTicketsForAdult + numberOfTicketsForKids;
    let totalServiceFee = priceServiceFee * numberServiceFee;

    let totalPrice = (numberOfTicketsForAdult * ticketPriceForAdult) + (numberOfTicketsForKids * ticketPriceForKids) + totalServiceFee;
    let totalProfitForTheCompany = totalPrice * 0.20;
    console.log(`The profit of your agency from ${companyName} tickets is ${totalProfitForTheCompany.toFixed(2)} lv.`);
    
}

agencyProfit(["Ryanair",
"60",
"23",
"158.96",
"39.12"])

