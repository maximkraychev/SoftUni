function addAndRemove(commands) {

    let finalArray = [];
    let count = 1;

    while (commands.length > 0) {
        let currentComand = commands.shift();

        switch (currentComand) {
            case 'add': finalArray.push(count);
                break;
            case 'remove': finalArray.pop()
                break;
        }
        count++
    }

    if (finalArray.length <= 0) {
        console.log("Empty");
    } else {
        console.log(finalArray.join(' '));
    }

}

addAndRemove(['add', 'add', 'add', 'add']);