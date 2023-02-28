const tbody = document.querySelector('#results tbody');
const submitBtn = document.querySelector('#submit');
const formElement = document.querySelector('#form');

const url = 'http://localhost:3030/jsonstore/collections/students';
requestForTableData();

function requestForTableData() {
    fetch(url)
        .then(res => res.json())
        .then(render)
        .catch(err => console.log(err))
}


submitBtn.addEventListener('click', addStudent);

function addStudent(event) {
    event.preventDefault();
    const data = new FormData(formElement);

    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const facultyNumber = data.get('facultyNumber');
    const grade = data.get('grade');

    if (firstName == '' || lastName == '' || facultyNumber == '' || grade == '') {
        return;
    }

    const content = {
        firstName,
        lastName,
        facultyNumber,
        grade
    }

    requestToSave(url, content);

    Array.from(document.querySelectorAll('input')).forEach(x => x.value = '');
}

function requestToSave(url, data) {
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => res ? requestForTableData() : null)
        .catch(err => console.log(err))
}

function render(data) {
    tbody.innerHTML = '';
    Object.values(data).forEach(x => {
        const tr = document.createElement('tr');
        factory(x.firstName, tr);
        factory(x.lastName, tr);
        factory(x.facultyNumber, tr);
        factory(x.grade, tr);
        tbody.appendChild(tr);
    })
}

function factory(data, appendTo) {
    const td = document.createElement('td');
    td.textContent = data;
    appendTo.appendChild(td);
}
