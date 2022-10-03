function requiredReading(bookPages, readedPagesPerHour, days) {

    let timeToReadTheBook = bookPages / readedPagesPerHour;
    let requiredHoursPerDay = timeToReadTheBook / days;
    console.log(requiredHoursPerDay);

}
requiredReading(212, 20, 2);