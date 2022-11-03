function meetings(input) {

    // const objScheduledMeetings = {};

    // for (line of input) {
    //     const [day, name] = line.split(' ');

    //     if(objScheduledMeetings.hasOwnProperty(day)) {
    //         console.log(`Conflict on ${day}!`);
    //     } else {
    //         objScheduledMeetings[day] = name;
    //         console.log(`Scheduled for ${day}`);
    //     }
    // }

    // for(const [day, name] of Object.entries(objScheduledMeetings)) {
    //     console.log(day + ' -> ' + name);
    // }

    // With maps

    const mapOfScheduleMeetings = new Map();

    for (line of input) {
        const [day, name] = line.split(' ');

        if (mapOfScheduleMeetings.has(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            mapOfScheduleMeetings.set(day, name);
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const [day, name] of mapOfScheduleMeetings) {
        console.log(day + ' -> ' + name);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);