class Ticket {
    constructor(public destination: String, public price: Number, public status: String) { }
}

function ticketsSorter(tickets: String[], sortBy: keyof Ticket): object[] {
    return tickets
        .map(x => x.split('|'))
        .map(x => new Ticket(x[0], Number(x[1]), x[2]))
        .sort((a, b) => a[sortBy].toString().localeCompare(b[sortBy].toString()));
}


// console.log(ticketsSorter(
//     [
//         'Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'
//     ],
//     'destination'
// ));

console.log(ticketsSorter(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
));






