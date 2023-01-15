function calculator() {
    let numberOneElement = null;
    let numberTwoElement = null;
    let resultElement = null;

    const objFunctions = {
        init(num1, num2, result) {
            numberOneElement = document.querySelector(num1);
            numberTwoElement = document.querySelector(num2);
            resultElement = document.querySelector(result);
        },
        add() {
            resultElement.value = Number(numberOneElement.value) + Number(numberTwoElement.value);
        },
        subtract() {
            resultElement.value = Number(numberOneElement.value) - Number(numberTwoElement.value);
        }
    }

    return objFunctions;
}




