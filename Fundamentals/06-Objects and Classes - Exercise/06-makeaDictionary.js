function makeaDictionary(input) {
    // make emty object
    const mainObject = {};

    // take every JSON
    input.forEach(line => {

        // make the JASON to object
        const object = JSON.parse(line);

        // take the entries from that object and push them into our main Object
        Object.entries(object).forEach(([key, value]) => {
            mainObject[key] = value
        });
        
    })
    // take all the keys and sort them
    let keys = Object.keys(mainObject);
    keys.sort((a, b) => a.localeCompare(b));

    // print the final result
    keys.forEach(key => console.log(`Term: ${key} => Definition: ${mainObject[key]}`));
}

makeaDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);