function townsToJSON(input) {

    const result = [];

    input.forEach((x, index) => {
        if (index < 1) {
            return;
        }

        let [town, latitude, longitude] = x
            .split('|')
            .map(x => x.trim())
            .filter(x => x !== '')

        latitude = Number(Number(latitude).toFixed(2));
        longitude = Number(Number(longitude).toFixed(2));

        result.push(objMaker(town, latitude, longitude));
    })

    console.log(JSON.stringify(result));

    function objMaker(town, latitude, longitude) {
        return {
            'Town': town,
            'Latitude': latitude,
            'Longitude': longitude,
        }
    }
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]
)