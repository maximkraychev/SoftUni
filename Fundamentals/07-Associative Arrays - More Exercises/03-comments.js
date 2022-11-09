function comments(input) {

    let users = {};
    let objArticle = {};
    let objAll = {}

    input.forEach(information => {
        // add the user to the list of users
        if (information.includes('user ')) {
            addingUser(information);
        }
        // add the article to the article list
        else if (information.includes('article ')) {
            addingArticle(information)
        }
        // save the info
        else if (information.includes(' posts on ')) {
            comment(information);
        }
    })

    const entries = Object.entries(objAll);
    // Sorted by: count of comments
    const sorted = entries.sort((a ,b) => Object.values(b[1]).length - Object.values(a[1]).length);
    
    for(let [article, obj] of sorted) {
        console.log(`Comments on ${article}`);
        // Sorted by: user name
        let sortedObj = obj.sort((a, b) => a.user.localeCompare(b.user))
        sortedObj.forEach(curObj => {
            console.log(`--- From user ${curObj.user}: ${curObj.title} - ${curObj.content}`);
        }) 
    }

    //Functions >>> 
    function addingUser(line) {
        const user = line.replace('user ', '');
        if (!users[user]) {
            users[user] = user;
        }
    }

    function addingArticle(line) {
        const article = line.replace('article ', '');
        if (!objArticle[article]) {
            objArticle[article] = [];
        }
    }

    function comment(line) {
        line = line.replace(' posts on ', ', ').replace(': ', ', ');
        let arrayOfLine = line.split(', ');
        const [user, article, title, content] = arrayOfLine;

        if (users.hasOwnProperty(user) && objArticle.hasOwnProperty(article)) {
            if (!objAll[article]) {
                objAll[article] = []
            }
            let obj = {
                user,
                article,
                title,
                content
            }
            objAll[article].push(obj)

        }
    }
}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);

//comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run',  'someUser posts on Movies: Like'])

//comments(['user Mark', 'article Article', 'Mark posts on Article: title, I go shopping every day', 'stupidComment','user someUser', 'article BsomeArticle', 'someUser posts on BsomeArticle: NoTitle, stupidComment', 'user Max', 'article BsomeArticle', 'Max posts on BsomeArticle: titleHere, VerystupidComment', 'Max posts on Article: titleHere, VerystupidComment']);







// -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*

// Attempt with lots of nestet objects --- > 80/100 

// function comments(input) {

//     let users = {};
//     let objArticle = {};
//     let objAll = {}

//     input.forEach(information => {

//         if (information.includes('user ')) {
//             addingUser(information);
//         }

//         else if (information.includes('article ')) {
//             addingArticle(information)
//         }

//         else if (information.includes(' posts on ')) {
//             comment(information);
//         }
//     })

//     const entries = Object.entries(objAll);
//     const sorted =  entries.sort((a , b) => Object.values(b[1]).length - Object.values(a[1]).length);
    
//     for(const [article, obj] of sorted) {
//         console.log(`Comments on ${article}`);
//         const entrisFromObj = Object.entries(obj)
//         const sortedByUser = entrisFromObj.sort((a, b) => a[0].localeCompare(b[0]));

//         for(const [user, objTitleAndComment] of sortedByUser) {
//             let printLine = `--- From user ${user}: `
//             const entrisFromobjTitleAndComment = Object.entries(objTitleAndComment);

//             for(const [title, comment] of entrisFromobjTitleAndComment) {
//                 printLine += `${title} - ${comment}`
//             }

//             console.log(printLine);
//         } 
//     }

//     function addingUser(line) {
//         const user = line.replace('user ', '');
//         if (!users[user]) {
//             users[user] = user;
//         }
//     }

//     function addingArticle(line) {
//         const article = line.replace('article ', '');
//         if (!objArticle[article]) {
//             objArticle[article] = [];
//         }
//     }

//     function comment(line) {
//         line = line.replace(' posts on ', ', ').replace(': ', ', ');
//         let arrayOfLine = line.split(', ');
//         const [user, article, title, content] = arrayOfLine;

//         if (users.hasOwnProperty(user) && objArticle.hasOwnProperty(article)) {
//             if(!objAll[article]) {
//                 objAll[article] = { [user]:  {[title]: content}};
//             } else {
//                 objAll[article][user] = {[title]: content}
//             }  
//         } 
//     }
// }

//comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);

// comments(['user someUser', 'article someArticle', 'someUser posts on someArticle: NoTitle, stupidComment', 'user Max', 'article someArticle', 'Max posts on someArticle: titleHere, VerystupidComment']);


//comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like'])
