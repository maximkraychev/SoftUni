function condenseArrayToNumber(arr) {

    while (arr.length > 1) {
        
        for (let i = 0; i < arr.length; i++) {

            if (i < arr.length - 1) {
                arr[i] = arr[i] + arr[i + 1];
            } else {
                arr.pop()
            }

        }
    }

    let printline = arr[0];

    console.log(printline);
}

condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);