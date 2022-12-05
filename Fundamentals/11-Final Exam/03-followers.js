function followers(input) {

    let follower = {};
    let line = input.shift();

    while (line !== 'Log out') {

        let [command, ...values] = line.split(': ');

        switch (command) {
            case 'New follower': {
                const username = values[0];

                if (!follower.hasOwnProperty(username)) {
                    follower[username] = {
                        likes: 0,
                        comments: 0
                    }
                }
                break;
            }

            case 'Like': {
                const username = values[0];
                const count = Number(values[1]);

                if (follower.hasOwnProperty(username)) {
                    follower[username]['likes'] += count;
                } else {
                    follower[username] = {
                        likes: count,
                        comments: 0,
                    }
                }
                break;
            }

            case 'Comment': {
                const username = values[0];
                if (follower.hasOwnProperty(username)) {
                    follower[username]['comments'] += 1;
                } else {
                    follower[username] = {
                        likes: 0,
                        comments: 1,
                    }
                }
                break;
            }

            case 'Blocked': {
                const username = values[0];

                if (follower.hasOwnProperty(username)) {
                    delete follower[username];
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
            }

        }

        line = input.shift();
    }

    console.log(`${Object.keys(follower).length} followers`);

    for (const user in follower) {
        console.log(`${user}: ${follower[user].likes + follower[user].comments}`);
    }
}

// followers((["New follower: George",
// "Like: George: 5",
// "New follower: George",
// "Log out"])
// )

// followers((["Like: Katy: 3",
// "Comment: Katy",
// "New follower: Bob",
// "Blocked: Bob",
// "New follower: Amy",
// "Like: Amy: 4",
// "Log out"])
// )

followers((["Blocked: Amy",
"Comment: Amy",
"New follower: Amy",
"Like: Tom: 5",
"Like: Ellie: 5",
"Log out"])
)