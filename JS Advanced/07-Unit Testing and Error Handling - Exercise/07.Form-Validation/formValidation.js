function validate() {

    const checkBoxElement = document.getElementById('company');
    checkBoxElement.addEventListener('change', showHideCompanyNumber);

    const objWithRegex = {
        username: /^[a-zA-z0-9]{3,20}$/g,
        email: /^.*@.*\..*$/g,
        password: /^[\w]{5,15}$/g,
        companyNumber: /^[0-9]{4}$/g,
    }

    const buttonSubmit = document.getElementById('submit');
    buttonSubmit.addEventListener('click', check);

    function check(event) {
        event.preventDefault();
        let validInput = [];
        let invalidInput = [];

        const usernameElement = document.querySelector('#username');
        if (usernameElement.value.match(objWithRegex.username)) {
            validInput.push(usernameElement);
        } else {
            invalidInput.push(usernameElement);
        }

        const emailElement = document.querySelector('#email');
        if (emailElement.value.match(objWithRegex.email)) {
            validInput.push(emailElement);
        } else {
            invalidInput.push(emailElement);
        }

        const passwordElement = document.querySelector('#password');
        const confirmPasswordElement = document.querySelector('#confirm-password');
        if (passwordElement.value.match(objWithRegex.password) && passwordElement.value === confirmPasswordElement.value) {
            validInput.push(passwordElement);
            validInput.push(passwordElement);
        } else {
            invalidInput.push(passwordElement);
            invalidInput.push(confirmPasswordElement);
        }

        if (checkBoxElement.checked) {
            const companyElement = document.querySelector('#companyNumber');
            if (companyElement.value.match(objWithRegex.companyNumber)) {
                validInput.push(companyElement);
            } else {
                invalidInput.push(companyElement);
            }
        }

        validInput.forEach(el => el.style = 'border: none');
        invalidInput.forEach(el => el.style = 'border-color: red');

        const divToShowHide = document.getElementById('valid');
        if (invalidInput.length == 0) {
            divToShowHide.style.display = 'block';
        } else {
            divToShowHide.style.display = 'none';
        }
    }

    function showHideCompanyNumber() {
        const companyFielDsetElement = document.getElementById('companyInfo');
        if (checkBoxElement.checked) {
            companyFielDsetElement.style.display = 'block';
        } else {
            companyFielDsetElement.style.display = 'none';
        }
    }
}






