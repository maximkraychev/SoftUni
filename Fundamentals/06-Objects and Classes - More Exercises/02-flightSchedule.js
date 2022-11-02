function flightSchedule(input) {

    const flights = input[0];
    const statusChanged = input[1];
    const flightStatus = input[2][0];
    
    const objAllFlights = {};

    // Push all flights into the object
    flights.forEach(currentFlight => {
        const currentLine = currentFlight.split(' ');
        const flightNumber = currentLine.shift();
        const city = currentLine.join(' ');
        objAllFlights[flightNumber] = city;
    })
    // Push the status
    statusChanged.forEach(currentFlight => {
        const [flightNumber, status] = currentFlight.split(' ');
        
        if(objAllFlights.hasOwnProperty(flightNumber)) {
            objAllFlights[flightNumber] += ` ${status}`;
        }
    })

    if(flightStatus === 'Cancelled') {

        for(const flightNumber in objAllFlights) {

            if(objAllFlights[flightNumber].includes('Cancelled')) {

                const [city, status] = objAllFlights[flightNumber].split(' ');
                console.log(`{ Destination: '${city}', Status: '${status}' }`);
            }
        }
    } else if (flightStatus === 'Ready to fly') {

        for(const flightNumber in objAllFlights) {

            if(!objAllFlights[flightNumber].includes('Cancelled')) {

                const city = objAllFlights[flightNumber];
                console.log(`{ Destination: '${city}', Status: '${flightStatus}' }`);
            }
        }
    }

}

flightSchedule([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
);

// flightSchedule([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK330 Cancelled'],
//  ['Ready to fly']
// ]
// )