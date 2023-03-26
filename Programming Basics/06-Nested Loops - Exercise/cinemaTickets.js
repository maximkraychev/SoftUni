function cinemaTickets(input) {

    let index = 0;
    let theInput = input[index];
    index++;

    let countStudent = 0;
    let countStandard = 0;
    let countKid = 0;
    

    while(theInput !== "Finish") {
        let movieName = theInput;
        let freespace = Number(input[index]);
        index++;
        let currentInput = input[index];
        index++
        let currentCountTickets = 0;
        let currentFreeSpace = 0;

        while(currentInput !== "End") {
            if(currentInput === "Finish") {
                break;
            } 
            let typeTicket = currentInput;
            switch(typeTicket) {
                case "student":
                    countStudent++;
                    currentCountTickets++;
                    currentFreeSpace++;
                    break;
                case "standard":
                    countStandard++;
                    currentCountTickets++
                    currentFreeSpace++;
                    break;
                case "kid":
                    countKid++;
                    currentCountTickets++;
                    currentFreeSpace++;
                    break;
            }
            if(currentFreeSpace >= freespace) {
                break;
            }
            currentInput = input[index];
            index++
        }
        let occupancyOfTheMovie = (currentCountTickets / freespace) * 100;
        console.log(`${movieName} - ${occupancyOfTheMovie.toFixed(2)}% full.`);
        
        if(currentInput === "Finish") {
            break;
        }
        theInput = input[index];
        index++;    
    }

    let allTickets = countKid + countStandard + countStudent;
    let ticketPercentegeStudents = (countStudent / allTickets) * 100;
    let ticketPercentegeStandard = (countStandard / allTickets) * 100;
    let ticketPercentegeKid = (countKid / allTickets) *100;
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${ticketPercentegeStudents.toFixed(2)}% student tickets.`);
    console.log(`${ticketPercentegeStandard.toFixed(2)}% standard tickets.`);
    console.log(`${ticketPercentegeKid.toFixed(2)}% kids tickets.`);
    
}

cinemaTickets(["Shutter Island",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Rush",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Deadpool",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Finish"])
