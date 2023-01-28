window.addEventListener('load', solve);

function solve() {
    const nextButtonElemeent = document.getElementById('next-btn');

    const inputElements = document.querySelectorAll('input');
    nextButtonElemeent.addEventListener('click', onNext)
    let inputValue = null;

    function onNext(e) {
        e.preventDefault()
        inputValue = Array
            .from(inputElements)
            .map(x => x.value);

        if (inputValue.filter(x => x !== '').length < 5) {
            return;
        }

        const dateFrom = document.getElementById('date-in').value;
        const dateTo = document.getElementById('date-out').value;
        if (dateFrom >= dateTo) {
            return
        }

        if (Number(inputValue[4]) < 1) {
            return;
        }

        const liElement = elementMaker('li', false, 'reservation-content');
        const articleElement = document.createElement('article');

        articleElement.appendChild(elementMaker('h3', `Name: ${inputValue[0]} ${inputValue[1]}`));
        articleElement.appendChild(elementMaker('p', `From date: ${inputValue[2]}`));
        articleElement.appendChild(elementMaker('p', `To Date: ${inputValue[3]}`));
        articleElement.appendChild(elementMaker('p', `For ${inputValue[4]} people`));
        liElement.appendChild(articleElement);

        const buttonEdit = elementMaker('button', 'Edit', 'edit-btn');
        const buttonContinue = elementMaker('button', 'Continue', 'continue-btn');
        liElement.appendChild(buttonEdit);
        liElement.appendChild(buttonContinue);

        const ulElement = document.querySelector('.info-list')
        ulElement.appendChild(liElement);
        nextButtonElemeent.disabled = true;

        for (const el of inputElements) {
            el.value = '';
        }

        buttonEdit.addEventListener('click', onEdit);
        buttonContinue.addEventListener('click', onContinue)
    }

    function onCancel() {
        document.querySelector('.reservation-content').remove();
        nextButtonElemeent.disabled = false;
        const h1Element = document.getElementById('verification');
        h1Element.textContent = 'Cancelled.';
        h1Element.className = 'reservation-cancelled';
    }

    function onConfirm() {
        document.querySelector('.reservation-content').remove();
        nextButtonElemeent.disabled = false;

        const h1Element = document.getElementById('verification');
        h1Element.textContent = 'Confirmed.';
        h1Element.className = 'reservation-confirmed';
    }

    function onContinue() {
        const liElement = document.querySelector('.reservation-content');
        const ulElement = document.querySelector('.confirm-list');
        ulElement.appendChild(liElement)

        const confirmButton = liElement.querySelector('.edit-btn');
        confirmButton.removeEventListener('click', onEdit);
        confirmButton.textContent = 'Confirm';
        confirmButton.className = 'confirm-btn';
        confirmButton.addEventListener('click', onConfirm);

        const cancelButton = liElement.querySelector('.continue-btn');
        cancelButton.removeEventListener('click', onContinue);
        cancelButton.textContent = 'Cancel';
        cancelButton.className = 'cancel-btn';
        cancelButton.addEventListener('click', onCancel);
    }


    function onEdit() {
        Array
            .from(inputElements)
            .forEach((el, index) => {
                el.value = inputValue[index];
            })
        document.querySelector('.reservation-content').remove();
        nextButtonElemeent.disabled = false;
    }


    function elementMaker(type, text, className) {
        const element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }
        if (className) {
            element.setAttribute('class', className)
        }
        return element;
    }
}





