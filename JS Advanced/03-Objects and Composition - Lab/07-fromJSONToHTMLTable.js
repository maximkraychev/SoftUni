function fromJSONToHTMLTable(input) {

    let arr = JSON.parse(input);
    console.log('<table>');

    let heading = Object.keys(arr[0]);
    let finalHead = '\t<tr>';

    heading.forEach((head, index) => {
        head = replaceEntity(head);
        finalHead += `<th>${head}</th>`;

        if (heading.length - 1 === index) {
            finalHead += '</tr>';
        }

    })
    console.log(finalHead);

    let finalTeableData = '\t<tr>';

    for (obj of arr) {
        const values = Object.values(obj);

        for (let value of values) {
            value = replaceEntity(value);
            finalTeableData += `<td>${value}</td>`
        }

        finalTeableData += '</tr>';
        console.log(finalTeableData);
        finalTeableData = '\t<tr>';
    }

    console.log('</table>');

    function replaceEntity(input) {
        if (typeof input !== 'string') {
            return input;
        }

        while (input.includes('>' || '<')) {
            input = input.replace('>', '&gt;');
            input = input.replace('<', '&lt;');
        }
        return input;
    }
}

fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)

// fromJSONToHTMLTable(`[{"Name":"Pesho",
// "Score":4,
// " Grade":8},
// {"Name":"Gosho",
// "Score":5,
// " Grade":8},
// {"Name":"Angel",
// "Score":5.50,
// " Grade":10}]`
// )