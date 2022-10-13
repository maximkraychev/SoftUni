function lastKNumbersSequance(length, k) {

    // let elements = [1];

    // for (let i = 1; i < length; i++) {

    //     let element = 0;

    //     for (let j = 1; j <= k; j++) {

    //         if (i - j < 0) {
    //             continue;
    //         } else {
    //             element += elements[i - j];
    //         }
    //     }

    //     elements.push(element)
    // }
    // console.log(elements.join(' '));

    let elements = [1];

    for (let i = 1; i < length; i++) {
        let index = Math.max(elements.length - k, 0);

        let theLastThreeElements = elements.slice(index);
        let sum = 0;

        for(let el of theLastThreeElements) {
            sum += el
        }

        elements.push(sum);
    }

    console.log(elements.join(' '));
}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);