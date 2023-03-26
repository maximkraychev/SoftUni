function moving(input) {

    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let hight = Number(input[index]);
    index++;
    let boxes = input[index];

    let isThereMoreFreeSpace = true;

    let cubature = width * length * hight;
    let freeSpaceLeft = cubature;

    while(boxes !== "Done") {
        let numberOfBoxes = Number(boxes);
        freeSpaceLeft -= numberOfBoxes;
        index++;
        boxes = input[index];

        if(freeSpaceLeft <= 0) {
            let neededSpace = Math.abs(freeSpaceLeft);
            console.log(`No more free space! You need ${neededSpace} Cubic meters more.`);
            isThereMoreFreeSpace = false;
            break;
        }

    }
    
    if(isThereMoreFreeSpace) {
        console.log(`${freeSpaceLeft} Cubic meters left.`);
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

