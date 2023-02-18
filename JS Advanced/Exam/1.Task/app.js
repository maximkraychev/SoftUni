window.addEventListener('load', solve);

function solve() {
    const firstNameElement = document.querySelector('#first-name');
    const lastNameElement = document.querySelector('#last-name');
    const peopleCountElement = document.querySelector('#people-count');
    const fromDateElement = document.querySelector('#from-date');
    const daysCountElement = document.querySelector('#days-count');
    const listOfInputs = [firstNameElement, lastNameElement, peopleCountElement, fromDateElement, daysCountElement];

    const nextBtn = document.querySelector('#next-btn');
    const ticketInfoListElement = document.querySelector('.ticket-info-list');
    const confirmTicketElement = document.querySelector('.confirm-ticket');
    const mainElement = document.querySelector('#main');

    nextBtn.addEventListener('click', next);

    function next(event) {
        event.preventDefault();

        for (const input of listOfInputs) {
            if (input.value == '') {
                return;
            }
        }

        const firstName = firstNameElement.value;
        const lastName = lastNameElement.value;
        const peopleCount = peopleCountElement.value;
        const fromDate = fromDateElement.value;
        const daysCount = daysCountElement.value;

        const li = factoryAndAppend('li', false, false, 'ticket')
        const article = factoryAndAppend('article', false, li)
        factoryAndAppend('h3', `Name: ${firstName} ${lastName}`, article);
        factoryAndAppend('p', `From date: ${fromDate}`, article);
        factoryAndAppend('p', `For ${daysCount} days`, article);
        factoryAndAppend('p', `For ${peopleCount} people`, article);
        const editBtn = factoryAndAppend('button', 'Edit', li, 'edit-btn');
        const continueBtn = factoryAndAppend('button', 'Continue', li, 'continue-btn');
        ticketInfoListElement.appendChild(li);

        listOfInputs.forEach(x => x.value = '');
        nextBtn.disabled = true;

        editBtn.addEventListener('click', edit);
        continueBtn.addEventListener('click', onContinue);

        function onContinue() {
            editBtn.remove();
            continueBtn.remove();
            const confirmBtn = factoryAndAppend('button', 'Confirm', li, 'confirm-btn');
            const cancelBtn = factoryAndAppend('button', 'Cancel', li, 'cancel-btn');

            confirmBtn.addEventListener('click', onConfirm);
            cancelBtn.addEventListener('click', onCancel);

            confirmTicketElement.appendChild(li);
        }

        function onCancel() {
            li.remove();
            nextBtn.disabled = false;
        }

        function onConfirm() {
            mainElement.innerHTML = '';

            const h1 = document.createElement('h1');
            h1.textContent = 'Thank you, have a nice day!';
            h1.id = 'thank-you';
            mainElement.appendChild(h1);

            const backBtn = document.createElement('button');
            backBtn.textContent = 'Back';
            backBtn.id = 'back-btn';
            backBtn.onclick = 'reload';
            backBtn.addEventListener('click', back);
            mainElement.appendChild(backBtn);
        }

        function back() {
            location.reload();
        }

        function edit() {
            firstNameElement.value = firstName;
            lastNameElement.value = lastName;
            peopleCountElement.value = peopleCount;
            fromDateElement.value = fromDate;
            daysCountElement.value = daysCount;

            nextBtn.disabled = false;
            li.remove();
        }

    }

    function factoryAndAppend(el, text, appendTo, nameOfTheClass) {
        const element = document.createElement(el);
        if (text) {
            element.textContent = text;
        }
        if (nameOfTheClass) {
            element.className = nameOfTheClass;
        }
        if (appendTo) {
            appendTo.appendChild(element);
        }
        return element;
    }
}




