function basketballEquipment(input) {
    
    let taxForYear = Number(input[0]);

    let sneakers = taxForYear * 0.6;
    let outfit = sneakers * 0.8;
    let ball = outfit * 0.25;
    let accessories = ball * 0.20; 

    let total = taxForYear + sneakers + outfit + ball + accessories;
    
    console.log(total);
}

basketballEquipment(["550 "]);