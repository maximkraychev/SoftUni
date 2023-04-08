function notFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('404 Not Found');
    res.end();
}

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

// function createHtmlForCat(cat) {
//     const li = document.createElement('li');
//     elementFactory(li, { element: 'img', src: cat.img });
//     elementFactory(li, { element: 'h3', text: cat.name });
//     elementFactory(li, { element: 'p', text: cat.breed, innerElements: [{ element: 'span', text: 'Breed: ' }] });
//     elementFactory(li, { element: 'p', text: cat.description, innerElements: [{ element: 'span', text: 'Description: ' }] });
//     elementFactory(li, { element: 'ul', className: 'buttons', innerElements: [
//                             { element: 'li', className: 'btn edit', innerElements: [
//                                 {element: 'a', href: 'edit', text: 'Chnage Info'}]},
//                             { element: 'li', className: 'btn delete', innerElements: [
//                                 {element: 'a', href: 'delete', text: 'New Home'}]}
//                             ]});

//     return li;
// }

// function elementFactory(parent, data) {
//     const element = document.createElement(data.element);
//     if (data.className) {
//         element.className = data.className;
//     }
//     if (data.href) {
//         element.href = data.href;
//     }
//     if (data.src) {
//         element.src = data.src;
//     }
//     if (data.innerElements) {
//         data.innerElements.forEach(x => elementFactory(element, x));
//     }
//     if (data.text) {
//         element.textContent = data.text;
//     }
//     if (parent) {
//         parent.appendChild(element);
//     }

//     return element;
// }

module.exports = { notFound, idGenerator, createHtmlForCat };