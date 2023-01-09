function attachEventsListeners() {

    const inputsElements = document.querySelectorAll('input[type=text]');
    const buttonsElements = document.querySelectorAll('input[type=button]');
    const mainElement = document.getElementsByTagName('main')[0];

    mainElement.addEventListener('click', (e) => {
        const currentElement = e.target;
        if (currentElement == buttonsElements[0]) {
            const days = Number(inputsElements[0].value);
            const hours = days * 24;
            const minutes = hours * 60;
            const seconds = minutes * 60;
            inputsElements[1].value = hours;
            inputsElements[2].value = minutes;
            inputsElements[3].value = seconds;
        } else if (currentElement == buttonsElements[1]) {
            const hours = Number(inputsElements[1].value);
            const days = hours / 24;
            const minutes = hours * 60;
            const seconds = minutes * 60;
            inputsElements[0].value = days;
            inputsElements[2].value = minutes;
            inputsElements[3].value = seconds;
        } else if (currentElement == buttonsElements[2]) {
            const minutes = Number(inputsElements[2].value);
            const hours = minutes / 60;
            const days = hours / 24;
            const seconds = minutes * 60;
            inputsElements[0].value = days;
            inputsElements[1].value = hours;
            inputsElements[3].value = seconds;
        } else if (currentElement == buttonsElements[3]) {
            const seconds = Number(inputsElements[3].value);
            const minutes = seconds / 60;
            const hours = minutes / 60;
            const days = hours / 24;
            inputsElements[0].value = days;
            inputsElements[1].value = hours;
            inputsElements[2].value = minutes;
        }
    })
}