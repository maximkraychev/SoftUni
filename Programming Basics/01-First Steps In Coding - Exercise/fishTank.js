function fishTank(input){

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let sandAndStuff = Number(input[3]) / 100;

    let capacity = (length * width * height) / 1000;
    let capacityWithoutSand = capacity - (capacity * sandAndStuff);

    console.log(capacityWithoutSand);
    
}

fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)