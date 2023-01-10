function solve() {

  const buttonsElments = document.getElementsByTagName('button');
  const textareaElements = document.getElementsByTagName('textarea');
  const bodyOfTheTableElement = document.getElementsByTagName('tbody')[0];

  const generateButtonElement = buttonsElments[0];
  const buyButtonElement = buttonsElments[1];

  const inputTextAreaElement = textareaElements[0];
  const displayTextAreaElement = textareaElements[1];


  generateButtonElement.addEventListener('click', () => {
    const arrayOfInputObjects = JSON.parse(inputTextAreaElement.value)

    arrayOfInputObjects.forEach(obj => {
      const newTableRowElement = document.createElement('tr');

      const tableDataElement1 = document.createElement('td');
      const innerElement1 = document.createElement('img');
      innerElement1.src = obj.src;
      tableDataElement1.appendChild(innerElement1);
      newTableRowElement.appendChild(tableDataElement1);

      const tableDataElement2 = document.createElement('td');
      const innerElement2 = document.createElement('p');
      innerElement2.textContent = obj.name;
      tableDataElement2.appendChild(innerElement2);
      newTableRowElement.appendChild(tableDataElement2);

      const tableDataElement3 = document.createElement('td');
      const innerElement3 = document.createElement('p');
      innerElement3.textContent = obj.price;
      tableDataElement3.appendChild(innerElement3);
      newTableRowElement.appendChild(tableDataElement3);

      const tableDataElement4 = document.createElement('td');
      const innerElement4 = document.createElement('p');
      innerElement4.textContent = obj.decFactor;
      tableDataElement4.appendChild(innerElement4);
      newTableRowElement.appendChild(tableDataElement4);

      const tableDataElement5 = document.createElement('td');
      const innerElement5 = document.createElement('input');
      innerElement5.setAttribute('type', 'checkbox');
      tableDataElement5.appendChild(innerElement5);
      newTableRowElement.appendChild(tableDataElement5);

      bodyOfTheTableElement.appendChild(newTableRowElement);
    })
  })
}