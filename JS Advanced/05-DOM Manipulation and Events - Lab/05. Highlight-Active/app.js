function focused() {
    const inputsElements = document.querySelectorAll('div input');

    for (let input of inputsElements) {
        input.addEventListener('focus', (e) => {
            e.target.parentElement.setAttribute('class', 'focused');
        })

        input.addEventListener('blur', (e) => {
            e.target.parentElement.removeAttribute('class');
        })
    }
}