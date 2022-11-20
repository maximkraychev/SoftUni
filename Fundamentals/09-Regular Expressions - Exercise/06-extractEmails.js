function extractEmails(text) {

    text = text.toString();
    const regExp = /(\b|_)(?<email>[^_\.-][a-zA-Z\d\.\_\-]+[^_]\b@\b[a-zA-Z\.\-]+\b\.\b[a-zA-Z\.\-]+\b)/g;

    const matches = text.matchAll(regExp);

    if (matches !== null) {
        for (const match of matches) {
            console.log(match.groups.email);
        }
    }
}

extractEmails('Please contact us at: support@github.com.');