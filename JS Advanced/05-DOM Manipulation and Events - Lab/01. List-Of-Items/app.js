function addItem() {
    const ulElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');

    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement.value;

    ulElement.appendChild(newLiElement);
    inputElement.value = '';
}