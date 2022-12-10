function solution(number) {

    if (number <= 0) {
        return 0;
    }

    let sum = 0;

    for (let index = 1; index < number; index++) {

        if (index % 3 === 0) {
            sum += index;
        } else if (index % 5 === 0) {
            sum += index;
        }
    }

    return sum;
}

solution(10)