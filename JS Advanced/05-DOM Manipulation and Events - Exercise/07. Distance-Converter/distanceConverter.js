function attachEventsListeners() {
    const buttonElement = document.getElementById('convert');

    const inputElement = document.getElementById('inputDistance');
    const outputElement = document.getElementById('outputDistance');

    const selectInputElement = document.getElementById('inputUnits');
    const selectOutputElement = document.getElementById('outputUnits');

    const information = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }

    buttonElement.addEventListener('click', convert);

    function convert() {
        const inputNumber = Number(inputElement.value);
        const numberToMeter = inputNumber * information[selectInputElement.value];
        outputElement.value = numberToMeter / information[selectOutputElement.value];
    }
}