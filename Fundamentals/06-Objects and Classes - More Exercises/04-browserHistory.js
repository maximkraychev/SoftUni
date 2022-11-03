function browserHistory(object, stringArray) {

    // interating over the array
    for (command of stringArray) {

        // checking if the command is to clear and continue 
        if (command === 'Clear History and Cache') {
            object['Open Tabs'] = [];
            object['Recently Closed'] = [];
            object['Browser Logs'] = [];
            continue;
        }

        // spliting the information for action and site
        
        let line = command.split(' ');
        let action = line.shift();
        let site = line.join(' ');

        // if is 'Open' do that:
        if (action === 'Open') {
            object['Open Tabs'].push(site);
            object['Browser Logs'].push(command)

            // if is 'Close' do that:
        } else if (action === 'Close') {

            if (object['Open Tabs'].includes(site)) {
                let indexOfTabToremove = object['Open Tabs'].indexOf(site);
                let removedItem = object['Open Tabs'].splice(indexOfTabToremove, 1);
                object['Recently Closed'].push(removedItem);
                object['Browser Logs'].push(command)
            }
        }
    }

    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);
}

// browserHistory({
//     "Browser Name": "Google Chrome", 
//     "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
//     "Recently Closed": ["Yahoo", "Gmail"],
//     "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
// },
//     ["Close Facebook", "Open StackOverFlow", "Open Google"]
// );

browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)