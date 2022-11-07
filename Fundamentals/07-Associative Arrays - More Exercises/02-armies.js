function armies(input) {

    let leadersWithArmy = {};

    input.forEach(command => {
        //add the leader (no army)
        if (command.includes(' arrives')) {
            leaderArrives(command);
        }
        //add the army with its count to the leader (if he exists)
        else if (command.includes(': ')) {
            addingArmyToLeader(command);
        }
        //if the army exists somewhere add the count
        else if (command.includes(' + ')) {
            addingMoreArmyToExistingAlready(command);
        }
        //delete the leader and his army (if he exists)
        else if (command.includes(' defeated')) {
            deleteLider(command);
        }
    })
    // Takes entries from the main object and after that sum all army count for every leader and push them at the end of every leader array
    let entries = Object.entries(leadersWithArmy);
    entries.forEach((leaderAndArmy, index) => {
        let armySum = Number();
        for (const army in leaderAndArmy[1]) {
            armySum += leaderAndArmy[1][army];
        }
        entries[index].push(armySum);
    })

    // Sort by leader army count descending order
    entries.sort((a, b) => b[2] - a[2]);

    // Print leader and total army and sort all army by given leader descending order
    entries.forEach(leaderWithArmy => {
        let [leader, objArmy, totalArmy] = leaderWithArmy;
        console.log(leader + ': ' + totalArmy);
        // sorting> 
        let entriesFromArmy = Object.entries(objArmy);
        let armySorted = entriesFromArmy.sort((a, b) => b[1] - a[1])

        // Print army and count in the given format 
        for (const [armyName, armyCount] of armySorted) {
            console.log(`>>> ${armyName} - ${armyCount}`);
        }
    })

    // Only functions below >> 

    function leaderArrives(line) {
        const leader = line.replace(' arrives', '');
        leadersWithArmy[leader] = {};
    }

    function addingArmyToLeader(line) {
        line = line.split(': ')
        const leader = line.shift();
        let [armyName, armyCount] = line[0].split(', ');
        armyCount = Number(armyCount);

        if (leadersWithArmy.hasOwnProperty(leader)) {
            leadersWithArmy[leader][armyName] = armyCount
        }
    }

    function addingMoreArmyToExistingAlready(line) {
        let [armyName, armyCount] = line.split(' + ');
        armyCount = Number(armyCount);

        for (const leader in leadersWithArmy) {
            if (leadersWithArmy[leader].hasOwnProperty(armyName)) {
                leadersWithArmy[leader][armyName] += armyCount;
            }
        }
    }

    function deleteLider(line) {
        const leader = line.replace(' defeated', '');
        if (leadersWithArmy.hasOwnProperty(leader)) {
            delete leadersWithArmy[leader];
        }
    }
}

//armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])

armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])