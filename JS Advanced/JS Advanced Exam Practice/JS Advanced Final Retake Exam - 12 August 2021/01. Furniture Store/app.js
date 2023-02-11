window.addEventListener('load', solve);

function solve() {
    const modelElement = document.getElementById('model');
    const yearElement = document.getElementById('year');
    const descriptionElement = document.getElementById('description');
    const priceElement = document.getElementById('price');
    const addButton = document.getElementById('add');

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        const model = modelElement.value;
        const description = descriptionElement.value;
        const year = Number(yearElement.value);
        const price = Number(priceElement.value);

        if (model == '' || description == '' || year == '' || price == '' || year < 0 || price < 0) {
            return;
        }

        const tbodyElement = document.getElementById('furniture-list');

        const trOne = factoryElement('tr', null, 'info');
        trOne.appendChild(factoryElement('td', model));
        trOne.appendChild(factoryElement('td', price.toFixed(2)));
        const tdWithButtons = document.createElement('td');
        const moreBtn = factoryElement('button', 'More Info', 'moreBtn');
        const buyBtn = factoryElement('button', 'Buy it', 'buyBtn');
        tdWithButtons.appendChild(moreBtn);
        tdWithButtons.appendChild(buyBtn);
        trOne.appendChild(tdWithButtons);

        const trTwo = factoryElement('tr', null, 'hide');
        trTwo.appendChild(factoryElement('td', `Year: ${year}`));
        const tdDescription = factoryElement('td', `Description: ${description}`);
        tdDescription.setAttribute('colspan', '3');
        trTwo.appendChild(tdDescription);

        tbodyElement.appendChild(trOne);
        tbodyElement.appendChild(trTwo);

        [modelElement, yearElement, descriptionElement, priceElement].map(x => x.value = '');

        moreBtn.addEventListener('click', (event) => {
            if (event.target.textContent == 'More Info') {
                event.target.textContent = 'Less Info';
                trTwo.style.display = 'contents';
            } else {
                event.target.textContent = 'More Info';
                trTwo.style.display = 'none';
            }
        });

        buyBtn.addEventListener('click', (event) => {
            let totalpriceElement = document.querySelector('.total-price');
            const totalPriceTillNow = Number(totalpriceElement.textContent)
            totalpriceElement.textContent = (totalPriceTillNow + price).toFixed(2);
            trOne.remove();
            trTwo.remove();
        });
    })

    function factoryElement(el, text, className) {
        const element = document.createElement(el);
        if (text) {
            element.textContent = text;
        }

        if (className) {
            element.className = className;
        }
        return element;
    }
}
