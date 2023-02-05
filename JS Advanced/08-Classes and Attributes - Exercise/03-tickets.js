function tickets(tickets, sortPar) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const arrayWithTickets = [];

    tickets.forEach(ticket => {
        const [destination, price, status] = ticket.split('|');
        arrayWithTickets.push(new Ticket(destination, price, status));
    });

    if (sortPar == 'price') {
        return arrayWithTickets.sort((a, b) => a[sortPar] - b[sortPar]);
    }

    return arrayWithTickets.sort((a, b) => a[sortPar].localeCompare(b[sortPar]));
}

console.table(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

console.table(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));