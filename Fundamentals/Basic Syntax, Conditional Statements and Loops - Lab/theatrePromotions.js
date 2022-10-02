function theatrePromotions(type, age) {

    let printLine;

    if(age < 0 || age > 122) {
        printLine = 'Error!';
    } else if (age <= 18) {
        switch(type) {
            case 'Weekday': printLine = '12$'; break;
            case 'Weekend': printLine = '15$'; break;
            case 'Holiday': printLine = '5$'; break;
        }
    } else if (age <= 64) {
        switch(type) {
            case 'Weekday': printLine = '18$'; break;
            case 'Weekend': printLine = '20$'; break;
            case 'Holiday': printLine = '12$'; break;
        }
    } else if (age <= 122) {
        switch(type) {
            case 'Weekday': printLine = '12$'; break;
            case 'Weekend': printLine = '15$'; break;
            case 'Holiday': printLine = '10$'; break;
        }
    }
    
    console.log(printLine);
}

theatrePromotions('Holiday', 15)