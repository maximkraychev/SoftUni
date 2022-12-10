function guessNumber() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let computerGuess = Math.floor(Math.random() * 100);
    let triesLeft = 2;

    let recursiveAsyncReadLine = function () {
        readline.question('Guess the number (0-100): ', guess => {

            if (guess <= 100 && guess >= 0) {

                if (Number(guess) === computerGuess) {
                    console.log('You guess it!');
                    return readline.close();

                } else if (guess < computerGuess) {
                    console.log('Too Low!');
                    if (triesLeft <= 0) {
                        console.log(`You have lost.`);
                        return readline.close();
                    }
                    console.log(`Attempts left:${triesLeft--}`);
                    recursiveAsyncReadLine();

                } else if (guess > computerGuess) {
                    console.log('Too High!');
                    if (triesLeft <= 0) {
                        console.log(`You have lost.`);
                        return readline.close();
                    }
                    console.log(`Attempts left:${triesLeft--}`);
                    recursiveAsyncReadLine();
                }

            } else {
                console.log('Invalid input! Try again...');
                if (triesLeft <= 0) {
                    console.log(`You have lost.`);
                    return readline.close();
                }
                console.log(`Attempts left:${triesLeft--}`);
                recursiveAsyncReadLine();
            }
        })
    }
    recursiveAsyncReadLine();
}

guessNumber();