function attachEvents() {
    const loadBtn = document.querySelector('#btnLoad');
    const phoneBook = document.querySelector('#phonebook');
    const personElement = document.querySelector('#person');
    const phoneElement = document.querySelector('#phone');
    const createBtn = document.querySelector('#btnCreate');

    const url = 'http://localhost:3030/jsonstore/phonebook';

    loadBtn.addEventListener('click', load);
    phoneBook.addEventListener('click', deletePhone);
    createBtn.addEventListener('click', createPhone);

    function createPhone() {
        const person = personElement.value;
        const phone = phoneElement.value;
        const data = {
            person,
            phone
        }

        requestForCreatePhoneBook(url, data);
        personElement.value = '';
        phoneElement.value = '';
    }

    async function deletePhone(event) {
        if (event.target.tagName != 'BUTTON') {
            return;
        }

        const liForCurrBtn = event.target.parentElement;
        const key = liForCurrBtn.dataset.id;
        const response = await deleteRequest(url, key);

        if (response._id == key) {
            liForCurrBtn.remove();
        }
    }

    async function load() {
        const data = await getPhoneBooksRequest(url);
        phoneBook.innerHTML = '';
        Object.values(data).forEach(contact => {
            phoneBook.appendChild(createLi(contact.person, contact.phone, contact._id));
        });
    }

    function createLi(name, phone, dataSet) {
        const li = document.createElement('li');
        li.textContent = `${name}: ${phone}`
        li.setAttribute('data-id', dataSet);
        const button = document.createElement('button');
        button.textContent = 'Delete';
        li.appendChild(button);
        return li;
    }

    async function getPhoneBooksRequest(url) {
        try {
            const request = fetch(url);
            const response = await request;
            return response.json();
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteRequest(url, key) {
        try {
            const request = fetch(`${url}/${key}`, {
                method: 'DELETE'
            })
            const response = await request;
            return response.json();
        } catch (err) {
            console.log(err);
        }
    }

    async function requestForCreatePhoneBook(url, content) {
        try {
            const request = fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(content)
            })

            const response = await request;
            return response.json();

        } catch (err) {
            console.log(err);
        }
    }
}

attachEvents();