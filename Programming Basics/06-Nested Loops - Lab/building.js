function building(input) {

    let floors = Number(input[0]);
    let rooms = Number(input[1]);

    for(let i = floors; i >= 1; i--) {
        let logoutput = "";
        for(let j = 0; j < rooms; j++) {
            if(i === floors) {
                logoutput += `L${i}${j} `;
            } else if(i % 2 === 0) {
                logoutput += `O${i}${j} `;
            } else {
                logoutput += `A${i}${j} `;
            }
            }
        console.log(logoutput);
    }
    

}

building(["4", "4"])