function worldTour(input) {

    // 01. Take the initial stops;
    let stops = input.shift();

    // 02. Execute the commands and print the current state of the stops after each command;
    let line = input.shift();

    while (line !== 'Travel') {
        let [command, ...values] = line.split(':');

        switch (command) {
            case 'Add Stop':
                const index = Number(values[0]);
                const string = values[1];

                if (index >= 0 && index < stops.length) {
                    const firstPart = stops.substring(0, index);
                    const secondPart = stops.substring(index);
                    stops = firstPart.concat(string).concat(secondPart);
                }
                console.log(stops);
                break;

            case 'Remove Stop':
                const startIndex = Number(values[0]);
                const endIndex = Number(values[1]);

                if (startIndex >= 0 && startIndex <= endIndex && endIndex < stops.length) {
                    const firstPart = stops.substring(0, startIndex);
                    const secondPart = stops.substring(endIndex + 1);
                    stops = firstPart.concat(secondPart);
                }
                console.log(stops);
                break;

            case 'Switch':
                const oldString = values[0];
                const newString = values[1];

                stops = stops.split(oldString).join(newString)
                console.log(stops);
                break;
        }

        line = input.shift();
    }

    // 03. Print the final result;
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
);

// worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
//     "Add Stop:3:Nigeria",
//     "Remove Stop:4:8",
//     "Switch:Albania: Azərbaycan",
//     "Travel"]);

