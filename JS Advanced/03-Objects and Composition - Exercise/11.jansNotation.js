function jansNotation(input) {

    const arr = [];

    for (const line of input) {
        if (typeof line == 'number') {
            arr.push(line);
        } else {
            if (arr.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }
            const lastNum = arr.pop();
            const beforeLastNum = arr.pop();
            arr.push(calculate(line, beforeLastNum, lastNum));
        }
    }

    if (arr.length == 1) {
        console.log(arr[0]);
    } else if (arr.length > 1) {
        console.log(`Error: too many operands!`);
    }

    function calculate(string, first, second) {
        if (string == '+') {
            return first + second;
        } else if (string == '-') {
            return first - second;
        } else if (string == '*') {
            return first * second;
        } else if (string == '/') {
            return first / second;
        }
    }
}

jansNotation([3,
    '+',
    4]
)

// jansNotation([5,
//     3,
//     4,
//     '*',
//     '-']
// )

// jansNotation([7,
//     33,
//     8,
//     '-']
// )

// jansNotation([15,
//     '/']
// )