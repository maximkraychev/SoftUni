const catches = document.querySelector('#catches');
const baseURL = 'http://localhost:3030/data/catches';

export async function load() {
    try {
        const request = await fetch(baseURL);

        if (request.ok == false) {
            throw new Error(`Error: ${request.statusText} - ${request.status}`);
        }

        const response = await request.json();
        catches.innerHTML = '';
        response.forEach(data => {
            const sessionId = sessionStorage.getItem('id')
            catches.appendChild(creatingCatch(data.angler, data.weight, data.species, data.location, data.bait, data.captureTime, data._id, data._ownerId, sessionId));
        })
    } catch (err) {
        alert(err);
    }

}

function creatingCatch(angler, weight, species, location, bait, captureTime, id, ownerid, sessionId) {
    const element = document.createElement('div');
    element.classList.add('catch');
    element.innerHTML = `
                        <label>Angler</label>
                        <input type="text" class="angler" value=${angler}>
                        <label>Weight</label>
                        <input type="text" class="weight" value=${weight}>
                        <label>Species</label>
                        <input type="text" class="species" value=${species}>
                        <label>Location</label>
                        <input type="text" class="location" value=${location}>
                        <label>Bait</label>
                        <input type="text" class="bait" value=${bait}>
                        <label>Capture Time</label>
                        <input type="number" class="captureTime" value=${captureTime}>
                        <button class="update">Update</button>
                        <button class="delete">Delete</button>
    `

    const buttons = Array.from(element.querySelectorAll('button'));
    buttons.forEach(button => button.dataset.id = id)
    if (ownerid != sessionId) {
        buttons.forEach(button => button.disabled = true);
    }

    return element;
}