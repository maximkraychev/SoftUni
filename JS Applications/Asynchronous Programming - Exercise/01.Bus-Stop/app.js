function getInfo() {
    const stopNameElement = document.querySelector('#stopName');
    const listElement = document.querySelector('#buses');
    const input = document.querySelector('#stopId');

    stopNameElement.textContent = '';
    listElement.innerHTML = '';

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${input.value}`)
        .then(response => response.json())
        .then(appendDataToDOM)
        .catch(handleError)

    input.value = '';

    function appendDataToDOM(data) {
        stopNameElement.textContent = data.name;
        const buses = data.buses;

        Object.entries(buses)
            .map(x => factory(`Bus ${x[0]} arrives in ${x[1]} minutes`))
            .forEach(x => listElement.appendChild(x));
    }

    function handleError(err) {
        stopNameElement.textContent = 'Error';
    }
}

function factory(text) {
    const element = document.createElement('li');
    element.textContent = text;
    return element;
}