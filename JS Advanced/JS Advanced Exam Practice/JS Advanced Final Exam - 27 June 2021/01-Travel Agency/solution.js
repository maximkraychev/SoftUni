window.addEventListener('load', solution);

function solution() {
  const name = document.getElementById('fname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const address = document.getElementById('address');
  const postalCode = document.getElementById('code');

  const arrWithInputs = [name, email, phone, address, postalCode];
  let arrWIthInfo = null;

  const submitBtn = document.getElementById('submitBTN');
  const editBTN = document.getElementById('editBTN');
  const continueBTN = document.getElementById('continueBTN');
  const unorderList = document.getElementById('infoPreview');

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (name.value == '' || email.value == '') {
      return;
    }

    arrWIthInfo = [name.value, email.value, phone.value, address.value, postalCode.value];

    unorderList.appendChild(factory('li', `Full Name: ${name.value}`));
    unorderList.appendChild(factory('li', `Email: ${email.value}`));
    unorderList.appendChild(factory('li', `Phone Number: ${phone.value}`));
    unorderList.appendChild(factory('li', `Address: ${address.value}`));
    unorderList.appendChild(factory('li', `Postal Code: ${postalCode.value}`));

    arrWithInputs.forEach(x => x.value = '');
    submitBtn.disabled = true;
    editBTN.disabled = false;
    continueBTN.disabled = false;
  })

  editBTN.addEventListener('click', () => {
    arrWithInputs.forEach((x, i) => x.value = arrWIthInfo[i]);
    unorderList.innerHTML = '';
    submitBtn.disabled = false
    editBTN.disabled = true;
    continueBTN.disabled = true;
  });

  continueBTN.addEventListener('click', () => {
    const div = document.getElementById('block');
    div.innerHTML = '';
    const h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    div.appendChild(h3);
  })

  function factory(element, text) {
    const el = document.createElement(element);
    el.textContent = text;
    return el;
  }
}
