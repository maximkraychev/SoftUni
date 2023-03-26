function clock(input) {

    let h = 0;

    while(h <= 23) {
        let m = 0;
        while(m <= 59) {
            console.log(`${h}:${m}`);
            m++;
        }

        h++;
    }
    
    // for(let h = 0; h <= 23; h++){
    //     for(let m = 0; m <= 59; m++){
    //         console.log(`${h}:${m}`);
    //     }
    // }
}

clock()