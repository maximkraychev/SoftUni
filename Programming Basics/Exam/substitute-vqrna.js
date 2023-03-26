function test(substitute) {

    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let count = 0;



    for (let first1 = k; first1 <= 8; first1++) {
        for (let first2 = 9; first2 >= l; first2--) {
            for (let second1 = m; second1 <= 8; second1++) {
                for (let second2 = 9; second2 >= n; second2--) {

                    if (first1 % 2 === 0 && second1 % 2 === 0 && first2 % 2 === 1 && second2 % 2 === 1) {

                        if (first1 === second1 && first2 === second2) {
                            console.log("Cannot change the same player.");
                        } else {
                            count++
                            console.log(`${first1}${first2} - ${second1}${second2}`);
                        }

                        if (count >= 6) {
                            break;
                        }

                    }
                }

                if (count >= 6) {
                    break;
                }
            }
            if (count >= 6) {
                break;
            }
        }
        if (count >= 6) {
            break;
        }
    }
}
substitute(["6",
    "7",
    "5",
    "6"])



