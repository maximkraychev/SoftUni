function solve() {
    let [movieName, hall, ticketPrice] = Array.from(document.getElementById('container').querySelectorAll('input'));
    const onScreenButton = document.getElementById('container').querySelector('button')
    const listMoviesElement = document.getElementById('movies').children[1];
    const listArchiveElement = document.getElementById('archive').children[1];
    const buttonClear = document.getElementById('archive').querySelector('button');

    onScreenButton.addEventListener('click', onScreen);
    buttonClear.addEventListener('click', onClear);

    function onScreen(e) {
        e.preventDefault()
        if (movieName.value !== '' && hall.value !== '' && ticketPrice.value.match(/\b\d+\b/g)) { // TODO...

            const listElement = elementCreator('li');
            listElement.appendChild(elementCreator('span', movieName.value));
            listElement.appendChild(elementCreator('strong', `Hall: ${hall.value}`));

            const divElement = elementCreator('div');
            divElement.appendChild(elementCreator('strong', ticketPrice.value))
            divElement.appendChild(elementCreator('input', '', 'Tickets Sold'));

            const archiveButton = elementCreator('button', 'Archive');
            archiveButton.addEventListener('click', onArhive);
            divElement.appendChild(archiveButton);
            listElement.appendChild(divElement);
            listMoviesElement.appendChild(listElement);

            movieName.value = '';
            hall.value = '';
            ticketPrice.value = '';
        }
    }

    function onArhive(e) {
        const movieListElement = e.target.parentNode.parentNode;
        const inputTicketsSoldElement = e.target.previousSibling;
        const movieTicketPrice = inputTicketsSoldElement.previousSibling.textContent;
        const totalAmount = movieListElement.querySelector('strong');
        const divElement = movieListElement.querySelector('div');

        if (inputTicketsSoldElement.value.match(/\b\d+\b/g)) {

            const sum = Number(inputTicketsSoldElement.value) * Number(movieTicketPrice);
            totalAmount.textContent = `Total amount: ${sum.toFixed(2)}`;
            divElement.remove();

            const deleteButton = elementCreator('button', 'Delete')
            deleteButton.addEventListener('click', () => {
                movieListElement.remove();
            });

            movieListElement.appendChild(deleteButton);
            listArchiveElement.appendChild(movieListElement);
        }
    }

    function onClear() {
        while (listArchiveElement.firstChild) {
            listArchiveElement.firstChild.remove()
        }
    }


    function elementCreator(element, text, placeholderText) {
        const newElement = document.createElement(element);

        if (placeholderText) {
            newElement.placeholder = placeholderText;
        }
        if (text) {
            newElement.textContent = text;
        }

        return newElement;
    }
}