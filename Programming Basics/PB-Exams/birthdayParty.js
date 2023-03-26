function birthdayParty(input) {

    let rent = Number(input);

    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let animator = rent * (1/3);

    let budget = rent + cake + drinks + animator;
    console.log(budget);
}

birthdayParty(3720)