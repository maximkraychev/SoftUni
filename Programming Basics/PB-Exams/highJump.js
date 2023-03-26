function highJump(input) {

    let index = 0;
    let targetHeight = Number(input[index]);
    index++
    let lathHeight = targetHeight - 30;
    let tryes = 0
    let tryCount = 0;
    let jumbHeight = Number(input[index])
    index++
    let isNotHighEnough = true

    while(isNotHighEnough) {
        tryes = 0;
       while(tryes !== 3) {
           tryCount++;

        if(jumbHeight > lathHeight){
            break;;
        } else {
            tryes++
            jumbHeight = Number(input[index])
            index++
        }

       }

        if(tryes === 3) {
            break;
        } 

        if(lathHeight === targetHeight) {
            if(jumbHeight > lathHeight) {
                isNotHighEnough = false;
                break;
            }
        }

        lathHeight += 5;
        jumbHeight = Number(input[index])
        index++

        
    }

    if(jumbHeight > targetHeight) {
        console.log(`Tihomir succeeded, he jumped over ${lathHeight}cm after ${tryCount} jumps.`);
    } else {
        console.log(`Tihomir failed at ${lathHeight}cm after ${tryCount} jumps.`);
    }
}

highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])

