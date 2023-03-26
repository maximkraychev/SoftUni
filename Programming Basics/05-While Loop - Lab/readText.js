function readText(input) {
    let index = 0;
    let names = input[index];

    while(names !== "Stop") {
        console.log(names);
        index++
        names = input[index];
    }
    
}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
