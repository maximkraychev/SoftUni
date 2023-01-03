function sumTable() {

    const getTableDateElement = document.querySelectorAll('td:nth-child(2)')
    const arrayFromTheTableData = Array.from(getTableDateElement);
    const arrayOfNumbers = [];

    arrayFromTheTableData.pop();
    arrayFromTheTableData.forEach(el => {
        arrayOfNumbers.push(Number(el.textContent));
    })

    const sum = arrayOfNumbers.reduce((acc, curr) => acc + curr);
    const sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}