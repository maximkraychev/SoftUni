function generateReport() {
    const checkBoxesElements = document.querySelectorAll('thead tr th input');
    const arrayOfCheckBoxes = Array.from(checkBoxesElements);

    const bodyTableRowElements = document.querySelectorAll('tbody tr');
    const arrayOfAllTableRows = Array.from(bodyTableRowElements);
    const outputArray = [];

    for (const row of arrayOfAllTableRows) {

        const obj = {};
        const arrayOfRow = Array.from(row.children);
        let isThereAtLeastOneProperty = false;

        for (let i = 0; i < arrayOfRow.length; i++) {
            if (arrayOfCheckBoxes[i].checked) {
                obj[arrayOfCheckBoxes[i].name] = arrayOfRow[i].textContent;
                isThereAtLeastOneProperty = true;
            }
        }

        if (isThereAtLeastOneProperty) {
            outputArray.push(obj);
        }
    }

    const textAreaElement = document.querySelector('#output');
    textAreaElement.textContent = JSON.stringify(outputArray);
}

