function personalTitles(input) {

    switch(input[1]) {
        case "m":
            if(input[0] >= 16) {
                console.log("Mr.");
            } else {
                console.log("Master");
            }
            break;
        case "f":
            if(input[0] >= 16) {
                console.log("Ms.");
            } else {
                console.log("Miss");
            }
            break;
    }
}

personalTitles(["15",
"m"])

