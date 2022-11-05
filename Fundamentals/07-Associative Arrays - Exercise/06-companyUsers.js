function companyUsers(input) {

    const objInformation = {};

    input.forEach(line => {
        const [company, id] = line.split(' -> ');

        if (!objInformation.hasOwnProperty(company)) {
            objInformation[company] = new Set([id]);
        } else {
            objInformation[company].add(id);
        }
    })

    const sortedEntries = Object.entries(objInformation).sort((a, b) => a[0].localeCompare(b[0]));

    sortedEntries.forEach(companyAndEmpID => {

        let [company, arrayOfID] = companyAndEmpID
        console.log(company);
        arrayOfID.forEach(id => console.log(`-- ${id}`));
    })
}

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
// ]
// );

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]
)