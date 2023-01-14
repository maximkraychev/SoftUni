function argumentInfo(...input) {

    const count = {};

    input.forEach(x => {
        if (count[typeof x]) {
            count[typeof x]++
        } else {
            count[typeof x] = 1;
        }
        
        console.log(`${typeof x}: ${x}`);
    });

    Object
        .entries(count)
        .sort((a, b) => b[1] - a[1])
        .forEach(x => x[1] > 0 ? console.log(`${x[0]} = ${x[1]}`) : null);
}

argumentInfo([123], 'cat', 42, function () { console.log('Hello world!'); });

