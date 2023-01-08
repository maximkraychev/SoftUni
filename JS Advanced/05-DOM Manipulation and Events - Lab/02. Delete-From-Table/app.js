function deleteByEmail() {

    const inputElement = document.getElementsByName('email')[0];
    const emailsElements = document.querySelectorAll('tr td:nth-of-type(2)');
    const resultElement = document.querySelector('#result');
    const arrayOfEmails = Array.from(emailsElements);
    const matchElement = arrayOfEmails.find(el => el.textContent === inputElement.value);


    if (matchElement) {
        const parentElementOfTheEmail = matchElement.parentElement;
        parentElementOfTheEmail.remove();
        resultElement.textContent = 'Deleted.';
        inputElement.value = '';
        
    } else {
        resultElement.textContent = 'Not found.';
    }
}