function login(input) {

    let index = 0;
    let username = input[index++];
    let couner = 0;
    let pasword = '';

    for (let i = username.length - 1; i >= 0; i--) {
        pasword += username[i]
    }

    while (input[index++] !== pasword) {
        couner++;
        if (couner >= 4) {
            console.log(`User ${username} blocked!`);
            return;
        } else {
            console.log('Incorrect password. Try again.');
        }
    }
    console.log(`User ${username} logged in.`);
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
