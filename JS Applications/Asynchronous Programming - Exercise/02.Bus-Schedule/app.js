function solve() {
    let id = 'depot';
    const infoElement = document.querySelector('.info');
    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${id}`)
            .then(response => response.json())
            .then(processingRequest)
            .catch((err) => {
                infoElement.textContent = 'Error';
                arriveBtn.disabled = true;
                departBtn.disabled = true;
            });
    }

    function arrive() {
        const stop = infoElement.textContent.substring(10);
        infoElement.textContent = `Arriving at ${stop}`;
        arriveBtn.disabled = true;
        departBtn.disabled = false;
    }

    function processingRequest(data) {
        infoElement.textContent = `Next stop ${data.name}`
        id = data.next;
        arriveBtn.disabled = false;
        departBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();