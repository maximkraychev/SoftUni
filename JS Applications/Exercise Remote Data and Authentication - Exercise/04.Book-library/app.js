const loadBtn = document.querySelector('#loadBooks');
const tableBody = document.querySelector('tbody');

const formElement = document.querySelector('form');
const formButton = formElement.querySelector('button');
const h3inForm = formElement.querySelector('h3');

const baseURL = 'http://localhost:3030/jsonstore/collections/books';

loadBtn.addEventListener('click', renderAllBooks);
formElement.addEventListener('submit', formRouter);
tableBody.addEventListener('click', validateAndRouting);

function formRouter(event) {
    event.preventDefault();
    const button = event.target.querySelector('button');

    if (button.textContent == 'Submit') {
        createBook(event.currentTarget);
    } else if (button.textContent == 'Save') {
        const id = button.dataset.id;
        editBook(event.currentTarget, id);
    }
}
function validateAndRouting(event) {
    if (event.target.tagName != 'BUTTON') {
        return;
    }

    if (event.target.textContent == 'Edit') {
        setUpForEdit(event);
    } else if (event.target.textContent == 'Delete') {
        onDelete(event);
    }
}

async function onDelete(event) {
    const id = event.target.parentNode.parentNode.dataset.id;
    await deleteRequest(`${baseURL}/${id}`);
    renderAllBooks();
}

async function editBook(formElement, id) {
    const inputs = validateInputsAndReturnsThem(formElement);
    const data = {
        title: inputs.title,
        author: inputs.author
    }
    await putRequest(data, `${baseURL}/${id}`);
    renderAllBooks()
    h3inForm.textContent = 'FORM';
    formButton.textContent = 'Submit';
    delete formButton.dataset.id;
    formElement.reset()
}


function setUpForEdit(event) {
    const tableDataWithButtons = event.target.parentNode;
    const tableDataWithAuthor = tableDataWithButtons.previousSibling;
    const tableDataWithTitle = tableDataWithAuthor.previousSibling;
    const id = tableDataWithButtons.parentNode.dataset.id;

    formElement.querySelector('input[name="title"]').value = tableDataWithTitle.textContent;
    formElement.querySelector('input[name="author"]').value = tableDataWithAuthor.textContent;

    h3inForm.textContent = 'Edit FORM';
    formButton.textContent = 'Save';
    formButton.dataset.id = id;
}

async function createBook(formElement) {
    const inputs = validateInputsAndReturnsThem(formElement)
    const data = {
        title: inputs.title,
        author: inputs.author
    }
    await postRequest(data, baseURL);
    renderAllBooks();
    formElement.reset()
}


async function renderAllBooks() {
    const data = await getRequest(baseURL);
    tableBody.innerHTML = '';
    Object.entries(data).forEach(x => {
        const [id, book] = x;
        tableBody.appendChild(createTableRow(id, book.author, book.title));
    })
}

function validateInputsAndReturnsThem(formElement) {
    const form = new FormData(formElement);
    const title = form.get('title');
    const author = form.get('author');

    if (title == '' || author == '') {
        return;
    }
    return { title, author };
}


function createTableRow(id, author, title) {
    const tr = document.createElement('tr');
    tr.dataset.id = id;

    const tdOne = document.createElement('td');
    const tdTwo = document.createElement('td');
    const tdThree = document.createElement('td');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    tdOne.textContent = title;
    tdTwo.textContent = author;
    tdThree.appendChild(editBtn);
    tdThree.appendChild(deleteBtn);

    tr.appendChild(tdOne);
    tr.appendChild(tdTwo);
    tr.appendChild(tdThree);

    return tr;
}

async function postRequest(obj, url) {
    try {
        const data = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }

        const request = await fetch(url, data);

        if (request.ok == false) {
            throw new Error(`Error: ${request.statusText} - ${request.status}`);
        }

        const response = await request.json();
        return response;
    } catch (err) {
        console.log(err);
    }
}

async function getRequest(url) {
    try {
        const request = await fetch(url);

        if (request.ok == false) {
            throw new Error(`Error: ${request.statusText} - ${request.status}`);
        }

        const response = await request.json();
        return response;
    } catch (err) {
        console.log(err);
    }
}

async function putRequest(obj, url) {
    try {
        const data = {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }
        const request = await fetch(url, data);

        if (request.ok == false) {
            throw new Error(`Error: ${request.statusText} - ${request.status}`);
        }

        const response = await request.json();
        return response;
    } catch (err) {
        console.log(err);;
    }
}

async function deleteRequest(url) {
    try {
        const request = await fetch(url, { method: 'DELETE' })
        if (request.ok == false) {
            throw new Error(`Error: ${request.statusText} - ${request.status}`);
        }

    } catch (err) {
        console.log(err);
    }
}

