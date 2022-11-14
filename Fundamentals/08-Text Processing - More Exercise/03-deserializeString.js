function deserializeString(input) {

    let arrayOfString = [];

    let row = input.shift();

    while (row !== 'end') {

        row = row.split(':')
        const char = row.shift()
        const position = row[0].split('/')

        for (const index of position) {
            arrayOfString[index] = char;
        }

        row = input.shift();
    }

    console.log(arrayOfString.join(''));
}

// deserializeString(['a:0/2/4/6',
// 'b:1/3/5',
// 'end']
// )

deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']
)