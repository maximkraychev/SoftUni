// function notFound(req, res) {
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.write('404 Not Found');
//     res.end();
// }

function idGenerator() {
    return ('000000000' + Math.round(Math.random() * 999999999)).slice(-9);
}

function createHtmlForCat(animal) {
    return `
    <li>
        <img src="${animal.img}" alt="Black Cat">
        <h3>${animal.name}</h3>
        <p><span>Breed: </span>${animal.breed}</p>
        <p><span>Description: </span>${animal.description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="">Change Info</a></li>
            <li class="btn delete"><a href="">New Home</a></li>
        </ul>
    </li>`
}


module.exports = { idGenerator, createHtmlForCat };