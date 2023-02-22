function loadCommits() {
    const userName = document.querySelector('#username').value;
    const repoName = document.querySelector('#repo').value;
    const list = document.querySelector('#commits');
    list.innerHTML = '';

    fetch(`https://api.github.com/repos/${userName}/${repoName}/commits`)
        .then(checkForBadStatus)
        .then(fillThelist)
        .catch(inCaseOfError)


    function checkForBadStatus(response) {
        if (response.ok == false) {
            const error = response.status;
            return Promise.reject(`${error}`);
        }
        return response.json()
    }

    function fillThelist(response) {
        response.forEach(x => {
            factory('li', `${x.commit.author.name}: ${x.commit.message}`, 'commits');
        })
    }

    function inCaseOfError(err) {
        factory('li', `Error: ${err} (Not Found)`);
    }

    function factory(el, text, id) {
        const element = document.createElement(el);
        element.textContent = text;
        element.id = id;
        list.appendChild(element);
        return element;
    }
}