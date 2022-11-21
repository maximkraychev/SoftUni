function winningTicket(tickets) {
    // For Judge >> 
    tickets = tickets.toString();

    const regExpForMatchingSixOrMoreSymbols = /\@{6,}|\#{6,}|\${6,}|\^{6,}/g;

    // Remove if there are more spaces and split after that;
    let arrayOfTickets = tickets.replace(/[ |,]{3,}/g, ', ').split(', ');

    for (const ticket of arrayOfTickets) {

        // The ticket length should be 20 from exercise condition
        if (ticket.length !== 20) {
            console.log('invalid ticket');
            continue;
        }
        // Spliting the ticket into two parts both by 10 elements; 
        const tiketFirstSymbols = ticket.substring(0, 10);
        const ticketLastSymbols = ticket.substring(10);

        // Match the element in every part (they should be 6 or more). If they aren't print ticket no match and go to the next ticket;
        if (tiketFirstSymbols.match(regExpForMatchingSixOrMoreSymbols) === null || ticketLastSymbols.match(regExpForMatchingSixOrMoreSymbols) === null) {
            console.log(`ticket "${ticket}" - no match`);
            continue;
        }
        const firstPartMatched = tiketFirstSymbols.match(regExpForMatchingSixOrMoreSymbols);
        const lastPartMatched = ticketLastSymbols.match(regExpForMatchingSixOrMoreSymbols);

        // If they are more than 6 copy one of the symbols of each of the parts and compare if they are the same;
        const symbolInFirstPart = firstPartMatched[0][0];
        const symbolInLastPart = lastPartMatched[0][0];

        if (symbolInFirstPart !== symbolInLastPart) {
            console.log(`ticket "${ticket}" - no match`);
            continue;
        }

        // If they are the same depending on the length of matched symbol print the coresponding answer;

        const lengthFirstPartMatched = firstPartMatched[0].length;
        const lengthLastPartMatched = lastPartMatched[0].length;
        const matchLength = Math.min(lengthFirstPartMatched, lengthLastPartMatched);

        if (lengthFirstPartMatched === 10 && lengthLastPartMatched === 10) {
            console.log(`ticket "${ticket}" - ${matchLength}${symbolInFirstPart} Jackpot!`);
        } else if (lengthFirstPartMatched > 5 && lengthLastPartMatched > 5) {
            console.log(`ticket "${ticket}" - ${matchLength}${symbolInFirstPart}`);
        }
    }
}

winningTicket('Cash$$$$$$Ca$$$$$$sh');

winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey');

winningTicket('validticketnomatch:(')