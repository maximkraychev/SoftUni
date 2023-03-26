function vacationBooksList(input){

    let numberOfPages = Number(input[0]);
    let pagesForOneHour = Number(input[1]);
    let days = Number(input[2]);

    let theWholeBook = numberOfPages / pagesForOneHour;
    let hoursPerDay = theWholeBook / days;

    console.log(hoursPerDay);
}

vacationBooksList(["432 ",
"15 ",
"4 "]
)