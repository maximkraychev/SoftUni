function validate() {
    const inputElement = document.getElementById('email');

    inputElement.addEventListener('change', function () {
        const regExp = /[a-z]+@[a-z]+\.[a-z]+/g;

        if (!inputElement.value.match(regExp)) {
            inputElement.setAttribute('class', 'error');
        } else {
            inputElement.removeAttribute('class')
        }
    })
}