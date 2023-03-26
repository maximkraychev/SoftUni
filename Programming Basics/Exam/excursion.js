function excursion (input) {

    let numberOfPeople = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let numberTransportCards = Number(input[2]);
    let numberTicketsForMuseum = Number(input[3]);

    let overnight = 20;
    let transportCard = 1.60;
    let ticketForMuseum = 6;


    let overnightForOnePerson = overnight * numberOfNights;
    let CardsForTransport = numberTransportCards * transportCard;
    let museumTicket = ticketForMuseum * numberTicketsForMuseum;

    let priceForOnePerson = overnightForOnePerson + CardsForTransport + museumTicket;
    let priceForTheGroup = priceForOnePerson * numberOfPeople;
    let withUnexpectedCosts = priceForTheGroup + (priceForTheGroup * 0.25);

    console.log(`${withUnexpectedCosts.toFixed(2)}`);
    
}

excursion(["131",
"9",
"33",
"46"])

