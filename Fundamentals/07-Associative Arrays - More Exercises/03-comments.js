function comments(input) {

    let users = {};
    let objArticle = {};
    let objAll = {}

    input.forEach(information => {

        if (information.includes('user ')) {
            addingUser(information);
        }

        else if (information.includes('article ')) {
            addingArticle(information)
        }

        else if (information.includes(' posts on ')) {
            comment(information);
        }
    })

    // TODO:...

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
            if(!objAll[article]) {
                objAll[article] = [user, title, content];
            } else {
                objAll[article] += [user, title, content];
            }
        } else {
            return;
        }
    }

    console.log(objAll);

}

//comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);

comments(['user someUser', 'article someArticle', 'someUser posts on someArticle: NoTitle, stupidComment','user Max', 'article someArticle', 'Max posts on someArticle: titleHere, VerystupidComment']);