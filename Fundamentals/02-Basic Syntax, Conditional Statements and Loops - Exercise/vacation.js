function vacation(number,type,day) {

    let price;
    let roomsForPeople = number;

    
    if(type === 'Business' && number >= 100) {
        roomsForPeople -= 10;
    } 

    switch(type) {
        case 'Students':
            switch(day) {
                case 'Friday': price = roomsForPeople * 8.45; break;
                case 'Saturday': price = roomsForPeople * 9.80; break;
                case 'Sunday': price = roomsForPeople * 10.46; break;
            }
            break;
        case 'Business':
            switch(day) {
                case 'Friday': price = roomsForPeople * 10.90; break;
                case 'Saturday': price = roomsForPeople * 15.60; break;
                case 'Sunday': price = roomsForPeople * 16.00; break;
            }
            break;
        case 'Regular':
            switch(day) {
                case 'Friday': price = roomsForPeople * 15.00; break;
                case 'Saturday': price = roomsForPeople * 20.00; break;
                case 'Sunday': price = roomsForPeople * 22.50; break;
            }
            break;
    }

    if(type === 'Students' && number >= 30) {
        price *= 0.85;
    } else if (type === 'Regular' && (number >= 10 && number <= 20)) {
        price *= 0.95;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
    
}

vacation(40,
    "Regular",
    "Saturday"    
    )