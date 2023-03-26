function salary(input) {

    const FACEBOOK = 150.00;
    const INSTAGRAM = 100.00;
    const REDDIT = 50.00;

    let tabs = Number(input[0]);
    let salary = Number(input[1]);

    for(let i = 2; i <= input.length; i++) {
        switch(input[i]) {
            case "Facebook":
                salary -= FACEBOOK;
                break;
            case "Instagram":
                salary -= INSTAGRAM;
                break;
            case "Reddit":
                salary -= REDDIT;
                break;
        }
        if(salary <= 0){
            console.log(`You have lost your salary.`);
            break;
        }
    }

    if(salary > 0) {
        console.log(salary);
    }
    
}

salary(["3",
"500",
"Github.com",
"Stackoverflow.com",
"softuni.bg"])
