function password(input) {

    let index = 0;
    let username = input[index];
    index++;
    let pass = input[index];
    index++;

    let passTry = input[index];

    while(pass !== passTry) {
        index++;
        passTry = input[index];
    }

    console.log(`Welcome ${username}!`);

}

password(["Gosho",
"secret",
"secret"])

