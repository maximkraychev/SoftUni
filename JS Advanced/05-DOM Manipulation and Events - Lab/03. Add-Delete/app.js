function addItem() {
    const inputElement = document.getElementById('newItemText');
    const ulElement = document.getElementById('items');

    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;
    inputElement.value = '';

    const newAncoreElement = document.createElement('a');
    newAncoreElement.textContent = '[Delete]'
    newAncoreElement.href = '#'

    newAncoreElement.addEventListener('click', function (e) {
        e.currentTarget.parentNode.remove();
    });

    newLiElement.appendChild(newAncoreElement);
    ulElement.appendChild(newLiElement);
}