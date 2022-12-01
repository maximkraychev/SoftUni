function extractEmails(text) {

    text = text.toString();
    const regExp = /(?<!\S)(?<user>[a-z\d]+((?<test>[\.\-\_]*)[a-z\d]+)?(\k<test>[a-z\d]+)*)@(?<host>[a-z]+([\-]?[a-z])*([\.][a-z]+([\-]?[a-z])*)+)/g;

    const matches = text.matchAll(regExp);

    if (matches !== null) {
        for (const match of matches) {
            console.log(`${match.groups.user}@${match.groups.host}`);
        }
    }
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')
