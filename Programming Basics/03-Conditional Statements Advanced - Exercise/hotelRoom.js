function hotelRoom(input) {

    let month = input[0];
    let overnightStays = Number(input[1]);

    let apartment = 0;
    let studio = 0;

    let totalPriceApartment = 0;
    let totalPriceStudio = 0;

    switch(month) {
        case "May":
        case "October":
            studio = 50.00;
            apartment = 65.00;
            totalPriceApartment = apartment * overnightStays;
            totalPriceStudio = studio * overnightStays;
             if(overnightStays > 14) {
                totalPriceStudio *= 0.70; 
            } else if(overnightStays > 7) {
                totalPriceStudio *= 0.95;
            }
            break;
        case "June":
        case "September":
            studio = 75.20;
            apartment = 68.70;
            totalPriceApartment = apartment * overnightStays;
            totalPriceStudio = studio * overnightStays;
            if(overnightStays > 14) {
                totalPriceStudio *= 0.80;
            }
            break;
        case "July":
        case "August":
            studio = 76.00;
            apartment = 77.00;
            totalPriceApartment = apartment * overnightStays;
            totalPriceStudio = studio * overnightStays;
            break;
    }

    if(overnightStays > 14) {
        totalPriceApartment *= 0.90; 
    }

    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalPriceStudio.toFixed(2)} lv.`);
}

hotelRoom(["August",
"20"])

