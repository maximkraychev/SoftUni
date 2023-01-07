function solve() {

    window.onload = function add() {
        document.querySelector('#selectMenuTo option').value = 'binary';
        document.querySelector('#selectMenuTo option').textContent = 'Binary'
        const newElement = document.createElement('option');
        const text = document.createTextNode('Hexadecimal');
        newElement.appendChild(text);
        document.getElementById('selectMenuTo').appendChild(newElement).value = 'hexadecimal';
    }

    document.querySelector('div button').addEventListener('click', () => {
        convert()
    });

    function convert() {
        const inputDecimal = Number(document.getElementById('input').value);
        const convertTo = document.getElementById('selectMenuTo');
        const resultElement = document.getElementById('result');

        if (convertTo.value === 'binary') {
            resultElement.value = inputDecimal.toString(2);

        } else if (convertTo.value === 'hexadecimal') {
            resultElement.value = inputDecimal.toString(16).toUpperCase();
        }
    }
}