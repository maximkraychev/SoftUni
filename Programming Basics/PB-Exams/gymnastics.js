function gymnastics(input) {

    let nation = input[0];
    let device = input[1];

    let sum = 0;

    switch(nation) {
        case "Russia":
            if(device === "ribbon"){
                let difficulty = 9.100;
                    let execution = 9.400;
                    sum = difficulty + execution;
            } else if(device === "hoop") {
                let difficulty = 9.300;
                let execution = 9.800;
                sum = difficulty + execution;
            } else if (device === "rope") {
                let difficulty = 9.600;
                let execution = 9.000;
                sum = difficulty + execution;
            }
            break;
        case "Bulgaria":
            if(device === "ribbon"){
                let difficulty = 9.600;
                    let execution = 9.400;
                    sum = difficulty + execution;
            } else if(device === "hoop") {
                let difficulty = 9.550;
                let execution = 9.750;
                sum = difficulty + execution;
            } else if (device === "rope") {
                let difficulty = 9.500;
                let execution = 9.400;
                sum = difficulty + execution;
            }
            break;
        case "Italy":
            if(device === "ribbon"){
                let difficulty = 9.200;
                    let execution = 9.500;
                    sum = difficulty + execution;
            } else if(device === "hoop") {
                let difficulty = 9.450;
                let execution = 9.350;
                sum = difficulty + execution;
            } else if (device === "rope") {
                let difficulty = 9.700;
                let execution = 9.150;
                sum = difficulty + execution;
            }
            break;
    }

    let percent = ((20 - sum) / 20) * 100
    console.log(`The team of ${nation} get ${sum.toFixed(3)} on ${device}.`);
    console.log(`${percent.toFixed(2)}%`);
    
}

gymnastics(["Bulgaria",
"ribbon"])
