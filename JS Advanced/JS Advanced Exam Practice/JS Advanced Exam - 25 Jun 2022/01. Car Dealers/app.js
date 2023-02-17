window.addEventListener("load", solve);

function solve() {
  const makeElement = document.querySelector('#make');
  const modelElement = document.querySelector('#model');
  const yearElement = document.querySelector('#year');
  const fuelElement = document.querySelector('#fuel');
  const originalCostElement = document.querySelector('#original-cost');
  const sellingPriceElement = document.querySelector('#selling-price');
  const listOFInputs = [makeElement, modelElement, yearElement, fuelElement, originalCostElement, sellingPriceElement];

  const tableBodyElement = document.querySelector('#table-body');
  const ulElement = document.querySelector('#cars-list');

  const publishBtn = document.querySelector('#publish');

  publishBtn.addEventListener('click', publish);

  function publish(event) {
    event.preventDefault();

    for (const input of listOFInputs) {
      if (input.value == '') {
        return;
      }
    }
    if (Number(originalCostElement.value) > Number(sellingPriceElement.value)) {
      return;
    }

    const make = makeElement.value;
    const model = modelElement.value;
    const year = yearElement.value;
    const fuel = fuelElement.value;
    const originalCost = originalCostElement.value;
    const sellingPrice = sellingPriceElement.value;

    const trElement = factoryAndAppend('tr', false, false, 'row');
    factoryAndAppend('td', make, trElement);
    factoryAndAppend('td', model, trElement);
    factoryAndAppend('td', year, trElement);
    factoryAndAppend('td', fuel, trElement);
    factoryAndAppend('td', originalCost, trElement);
    factoryAndAppend('td', sellingPrice, trElement);
    const td = factoryAndAppend('td', false, trElement);
    const editBtn = factoryAndAppend('button', 'Edit', td, 'action-btn edit');
    const sellBtn = factoryAndAppend('button', 'Sell', td, 'action-btn sell');
    tableBodyElement.appendChild(trElement);

    listOFInputs.forEach(x => x.value = '');

    editBtn.addEventListener('click', edit);
    sellBtn.addEventListener('click', sell);

    function edit() {
      makeElement.value = make;
      modelElement.value = model;
      yearElement.value = year;
      fuelElement.value = fuel;
      originalCostElement.value = originalCost;
      sellingPriceElement.value = sellingPrice;
      trElement.remove();
    }

    function sell() {
      trElement.remove();
      const li = factoryAndAppend('li', false, false, 'each-list');
      factoryAndAppend('span', `${make} ${model}`, li);
      factoryAndAppend('span', `${year}`, li);
      factoryAndAppend('span', `${Number(sellingPrice) - Number(originalCost)}`, li);
      ulElement.appendChild(li);
      const profitElement = document.querySelector('#profit');
      const totalProfit = Number(profitElement.textContent) + (Number(sellingPrice) - Number(originalCost));
      profitElement.textContent = totalProfit.toFixed(2);
    }
  }

  function factoryAndAppend(el, text, appendTo, nameOfTheClass) {
    const element = document.createElement(el);
    if (text) {
      element.textContent = text;
    }
    if (nameOfTheClass) {
      element.className = nameOfTheClass;
    }
    if (appendTo) {
      appendTo.appendChild(element);
    }
    return element;
  }

}
