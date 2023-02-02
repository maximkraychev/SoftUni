function validate() {

    const checkBoxElement = document.getElementById('company');
    checkBoxElement.addEventListener('change', showHideCompanyNumber);

    const objWithRegex = {
        username: /^[a-zA-z0-9]{3,20}$/g,
        email: /.*@\.+.*/g,
        password: /^[\w]{5,15}$/g,
        companyNumber: /^[0-9]{4}$/g,
    }
    const alltypedInputs = Array.from(document.querySelectorAll('input:not([type=checkbox])'));
    const buttonSubmit = document.getElementById('submit');

    buttonSubmit.addEventListener('click', check);

    function check(event) {
        event.preventDefault();

        let validInput = {};
        let invalidInput = {};

        alltypedInputs.forEach(element => {
            const elementID = element['id'];
            const elementText = element.value;

            if (elementID == 'confirm-password') {
                if (validInput.hasOwnProperty('password') && validInput.password.value === elementText) {
                    validInput[elementID] = element;
                    element.style.border = 'none';
                } else {
                    invalidInput[elementID] = element;
                    element.style.borderColor = 'red';
                }
                return;
            }

            if (elementID == 'companyNumber') {
                if (checkBoxElement.checked) {
                    if (elementText.match(objWithRegex[elementID])) {
                        validInput[elementID] = element;
                        element.style.border = 'none';
                    } else {
                        invalidInput[elementID] = element;
                        element.style.borderColor = 'red';
                    }
                }
                return;
            }

            if (elementText.match(objWithRegex[elementID])) {
                validInput[elementID] = element;
                element.style.border = 'none';
            } else {
                invalidInput[elementID] = element;
                element.style.borderColor = 'red';
            }
        })
        console.log(invalidInput);

        const divToShowHide = document.getElementById('valid');
        if (Object.keys(invalidInput).length == 0) {
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
