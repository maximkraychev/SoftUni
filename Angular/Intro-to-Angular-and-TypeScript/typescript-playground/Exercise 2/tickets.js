var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function ticketsSorter(tickets, sortBy) {
    return tickets
        .map(function (x) { return x.split('|'); })
        .map(function (x) { return new Ticket(x[0], Number(x[1]), x[2]); })
        .sort(function (a, b) { return a[sortBy].toString().localeCompare(b[sortBy].toString()); });
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
console.log(ticketsSorter([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status'));
