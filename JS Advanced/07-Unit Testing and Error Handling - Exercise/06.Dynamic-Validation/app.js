function validate() {
    const inputElement = document.getElementById('email');
    inputElement.addEventListener('change', onChange);

    function onChange() {
        const regExp = /^[a-z]+@[a-z]+\.[a-z]+$/g;

        if(regExp.test(inputElement.value)) {
            inputElement.classList.remove('error')
        } else {
            inputElement.classList.add('error');
        }
    }
}