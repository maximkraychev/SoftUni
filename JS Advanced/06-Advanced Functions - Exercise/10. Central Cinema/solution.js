function solve() {
    let [movieName, hall, ticketPrice] = Array.from(document.getElementById('container').querySelectorAll('input'));
    const onScreenButton = document.getElementById('container').querySelector('button')
    const listMoviesElement = document.getElementById('movies').children[1];
    const listArchiveElement = document.getElementById('archive').children[1];
    const buttonClear = document.getElementById('archive').querySelector('button');

    onScreenButton.addEventListener('click', onScreen);

    function onScreen(e) {
        e.preventDefault()
        if (movieName.value !== '' && hall.value !== '' && ) { // TODO...

            console.log(movieName.value == '');
            console.log(hall.value == '');
            console.log(Number(ticketPrice.value) !== NaN);


            const listElement = elementCreator('li');
            listElement.appendChild(elementCreator('span', movieName.value));
            listElement.appendChild(elementCreator('strong', hall.value));

            const divElement = elementCreator('div');
            divElement.appendChild(elementCreator('strong', ticketPrice.value))
            divElement.appendChild(elementCreator('input', '', 'Tickets Sold'));

            const archiveButton = elementCreator('button', 'Archive');
            divElement.appendChild(archiveButton);
            listElement.appendChild(divElement);
            listMoviesElement.appendChild(listElement);
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