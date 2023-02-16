window.addEventListener('load', solve);

function solve() {
    const genreElement = document.querySelector('#genre');
    const nameElement = document.querySelector('#name');
    const authorElement = document.querySelector('#author');
    const dateElement = document.querySelector('#date');
    const listOfInputs = [genreElement, nameElement, authorElement, dateElement];

    const allHitsElemnt = document.querySelector('.all-hits-container');

    const addBtn = document.querySelector('#add-btn');

    addBtn.addEventListener('click', add);

    function add(event) {
        event.preventDefault();

        for (const input of listOfInputs) {
            if (input.value == '') {
                return;
            }
        }

        const genre = genreElement.value;
        const name = nameElement.value;
        const author = authorElement.value;
        const date = dateElement.value;

        const div = factory('div', false, false, 'hits-info');

        const img = document.createElement('img');
        img.src = './static/img/img.png';
        div.appendChild(img);

        factory('h2', `Genre: ${genre}`, div);
        factory('h2', `Name: ${name}`, div);
        factory('h2', `Author: ${author}`, div);
        factory('h3', `Date: ${date}`, div);
        const saveBtn = factory('button', 'Save song', div, 'save-btn', save);
        const likeBtn = factory('button', 'Like song', div, 'like-btn', like);
        const deleteBtn = factory('button', 'Delete', div, 'delete-btn', del);

        allHitsElemnt.appendChild(div);
        listOfInputs.forEach(x => x.value = '');

        function like() {
            const elWIthLikes = document.querySelector('.likes p');
            const [text, number] = elWIthLikes.textContent.split(': ');
            elWIthLikes.textContent = `${text}: ${Number(number) + 1}`;
            likeBtn.disabled = true;
        }

        function save() {
            const divSaveElement = document.querySelector('.saved-container');
            likeBtn.remove();
            saveBtn.remove();
            divSaveElement.appendChild(div);
        }

        function del() {
            div.remove();
        }
    }

    function factory(el, text, append, className, func) {
        element = document.createElement(el);
        if (text) {
            element.textContent = text;
        }
        if (className) {
            element.classList.add(className);
        }
        if (typeof func == 'function') {
            element.addEventListener('click', func);
        }
        if (append) {
            append.appendChild(element);
        }
        return element;
    }
}