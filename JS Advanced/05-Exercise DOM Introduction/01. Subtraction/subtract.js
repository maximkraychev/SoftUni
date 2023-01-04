function subtract() {
    const firstNumberElement = document.getElementById('firstNumber');
    const secondNumberElement = document.getElementById('secondNumber');
    const sumElement = document.getElementById('result')

    const firstNumber = Number(firstNumberElement.value);
    const secondNumber = Number(secondNumberElement.value);

    const sum = firstNumber - secondNumber;
    sumElement.textContent = sum;
}