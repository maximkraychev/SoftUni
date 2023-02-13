function solve() {
    const firstNameElement = document.querySelector('#fname');
    const lastNameElement = document.querySelector('#lname');
    const emailElement = document.querySelector('#email');
    const birthElement = document.querySelector('#birth');
    const positionElement = document.querySelector('#position');
    const salaryElement = document.querySelector('#salary');
    const allInputsInArray = [firstNameElement, lastNameElement, emailElement, birthElement, positionElement, salaryElement];

    const hireWorkerButton = document.querySelector('#add-worker');
    const tbodyElement = document.querySelector('#tbody');
    const spanAllSumElment = document.querySelector('#sum');

    hireWorkerButton.addEventListener('click', hire);

    function hire(event) {
        event.preventDefault();
        const inputValues = [];

        allInputsInArray.forEach(x => {
            if (x.value === '') {
                return;
            }
            inputValues.push(x.value);
        });
        allInputsInArray.forEach(x => x.value = '');

        const arrWithTd = [];
        inputValues.forEach(x => arrWithTd.push(factory('td', x)));

        const trElement = document.createElement('tr');
        arrWithTd.forEach(x => trElement.appendChild(x));

        const firedButton = factory('button', 'Fired', 'fired');
        const editButton = factory('button', 'Edit', 'edit');
        const tdElement = document.createElement('td');
        tdElement.appendChild(firedButton);
        tdElement.appendChild(editButton);
        trElement.appendChild(tdElement);
        tbodyElement.appendChild(trElement);

        const sumSoFar = Number(spanAllSumElment.textContent);
        spanAllSumElment.textContent = (sumSoFar + Number(inputValues[inputValues.length - 1])).toFixed(2);

        editButton.addEventListener('click', edit);
        function edit() {
            allInputsInArray.forEach((el, i) => el.value = inputValues[i]);
            spanAllSumElment.textContent = (Number(spanAllSumElment.textContent) - Number(inputValues[inputValues.length - 1])).toFixed(2);
            trElement.remove();
        }

        firedButton.addEventListener('click', fired);
        function fired() {
            spanAllSumElment.textContent = (Number(spanAllSumElment.textContent) - Number(inputValues[inputValues.length - 1])).toFixed(2);
            trElement.remove();
        }
    }

    function factory(el, text, classs) {
        const element = document.createElement(el);
        element.textContent = text;
        if (classs) {
            element.classList.add(classs);
        }
        return element;
    }
}
solve()