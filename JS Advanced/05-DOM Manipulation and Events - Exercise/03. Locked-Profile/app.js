function lockedProfile() {
    const buttonsElements = document.getElementsByTagName('button');
    const mainElement = document.getElementById('main');
    const arrayOfButtonsElements = Array.from(buttonsElements);


    mainElement.addEventListener('click', (e) => {
        if (arrayOfButtonsElements.includes(e.target)) {

            if (e.target.textContent == 'Show more') {
                const userElement = e.target.parentNode;
                const checkedBoxElement = userElement.querySelector('input[type=radio]:checked');

                if (checkedBoxElement.value == 'unlock') {
                    const hiddenDivElement = userElement.getElementsByTagName('div')[0];
                    hiddenDivElement.style.display = 'block'
                    e.target.textContent = 'Hide it'
                }

            } else if(e.target.textContent == 'Hide it') {
                const userElement = e.target.parentNode;
                const checkedBoxElement = userElement.querySelector('input[type=radio]:checked');

                if (checkedBoxElement.value == 'unlock') {
                    const hiddenDivElement = userElement.getElementsByTagName('div')[0];
                    hiddenDivElement.style.display = 'none'
                    e.target.textContent = 'Show more'
                }
            }
        }
    })
}