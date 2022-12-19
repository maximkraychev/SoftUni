/*
Make a tic-tac-toe console application.
You will receive an array of arrays. As you know there are two players in this game, so the first element of the input will be the first player's chosen coordinates, the second element will be the second player's turn coordinates, and so on.

The initial state of the dashboard is:
[[false, false, false],
[false, false, false],
[false, false, false]]

The first player's mark is X and the second player's mark is O.

Input
One parameter:
•	An array - the moves in a row that players make

Output
•	There are two players - X and O
•	If  a player tries to make his turn on already taken place, he should take his turn again and you should print the following message:
"This place is already taken. Please choose another!"
•	If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:
"The game ended! Nobody wins :("
•	If someone wins you should print the following message and  the current state of the dashboard:
"Player {x} wins!"
Note: When printing the state of the dashboard the elements of each row of the dashboard should be separated by "\t" and each row should be on a new line.

Constraints
The elements in the input array will always be enough to end the game. 
*/

function ticTacToe(input) {

    const playerOneSymbol = 'X';
    const playerTwoSymbol = 'O';
    let playerTurn = 'PlayerOne'
    let freeSpaceOnDashboard = 9;
    let isSomeoneWon = false;
    let winner = '';

    // Creating the board;
    const board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]]

    // Loop over the commands;
    for (let index = 0; index < input.length; index++) {

        // Take the coordinates from the current command;
        const coordinates = input[index].split(' ');
        const numOne = Number(coordinates[0]);
        const numTwo = Number(coordinates[1]);

        // Chek if the current spot is already taken, if it is print the corresponding text and continue;
        if (board[numOne][numTwo] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        // Chek which player is playing right now and mark the dashboard with corresponding symbol;
        if (playerTurn === 'PlayerOne') {
            board[numOne][numTwo] = playerOneSymbol;
            freeSpaceOnDashboard--;
            playerTurn = 'PlayerTwo';

        } else if (playerTurn === 'PlayerTwo') {
            board[numOne][numTwo] = playerTwoSymbol;
            freeSpaceOnDashboard--;
            playerTurn = 'PlayerOne'
        }

        // First chek if there are enough mark on the board for someone to win;
        // Then chek if there are 3 consecutive symbol for playerOne or for PlayerTwo;
        if (freeSpaceOnDashboard < 5) {
            if (checkRows(board, playerOneSymbol) || checkCols(board, playerOneSymbol) || checkDiagonals(board, playerOneSymbol)) {
                isSomeoneWon = true;
                winner = playerOneSymbol;
                break;

            } else if (checkRows(board, playerTwoSymbol) || checkCols(board, playerTwoSymbol) || checkDiagonals(board, playerTwoSymbol)) {
                isSomeoneWon = true;
                winner = playerTwoSymbol;
                break;
            }
        }

        // If there is no more space in the board break;
        if (freeSpaceOnDashboard === 0) {
            break;
        }

    }

    // Print the message depending on the outcome of the game;
    if (isSomeoneWon) {
        console.log(`Player ${winner} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }

    // Print the board;
    board.forEach(row => {
        console.log(row.join('\t'));
    })


    //--------------------------------- Check functions below ----------------------------------------------------


    // Function that chek all rows on our board and if there is a row with the same element will return the element otherwise will return false;
    function checkRows(matrix, symbol) {
        if (matrix.map(x => x.every((el) => el === symbol)).some((el) => el === true)) {
            return symbol;
        }
        return false;
    }


    // Function that chek all column on our board and if there is a column with the same element will return the element otherwise will return false;
    function checkCols(matrix, symbol) {
        const columns = []

        for (let i = 0; i < matrix.length; i++) {
            const col = [];

            for (let j = 0; j < matrix.length; j++) {
                col.push(matrix[j][i]);
            }
            columns.push(col.every((arr) => arr === symbol));
        }

        if (columns.some((el) => el !== false)) {
            return symbol;
        }
        return false;
    }

    // Function that chek all diagonal on our board and if there is a diagonal with the same element will return the element otherwise will return false;
    function checkDiagonals(matrix, symbol) {
        const diagonal = [];
        const length = matrix.length;

        const firstDiagonal = [];
        const secondDiagonal = [];

        for (let i = 0; i < length; i++) {
            firstDiagonal.push(matrix[i][i] === symbol);
            secondDiagonal.push(matrix[i][length - 1 - i] === symbol);
        }

        diagonal.push(firstDiagonal.every(el => el === true));
        diagonal.push(secondDiagonal.every(el => el === true));

        if (diagonal.some(el => el === true)) {
            return symbol;
        }

        return false;
    }
}

// ticTacToe(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]
// );

// ticTacToe(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// )

ticTacToe(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
)