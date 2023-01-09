function solve() {
   const buttonsElements = document.getElementsByClassName('add-product');
   const textAreaElement = document.getElementsByTagName('textarea')[0];
   const checkoutButtonElement = document.getElementsByClassName('checkout')[0];
   const arrayOFButtonsElements = Array.from(buttonsElements);

   const boughtProducts = {};

   arrayOFButtonsElements.forEach(el => {
      el.addEventListener('click', addProduct);
   });

   checkoutButtonElement.addEventListener('click', checkout);


   function addProduct(e) {
      const currentProductElement = e.target.parentNode.parentNode;
      const priceElement = Number(currentProductElement.querySelector('.product-line-price').textContent);
      const nameProductElement = currentProductElement.querySelector('.product-title').textContent;
      textAreaElement.value += `Added ${nameProductElement} for ${priceElement.toFixed(2)} to the cart.\n`;

      if (!boughtProducts.hasOwnProperty(nameProductElement)) {
         boughtProducts[nameProductElement] = 0;
      }

      boughtProducts[nameProductElement] += priceElement;
   }

   function checkout() {
      const allBoughtProducts = [];
      let totalPrice = 0;

      for (const key in boughtProducts) {
         const name = key;
         const price = boughtProducts[key];
         allBoughtProducts.push(name);
         totalPrice += price;
      }

      textAreaElement.value += `You bought ${allBoughtProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

      checkoutButtonElement.setAttribute('disabled', 'true');
      arrayOFButtonsElements.forEach(addButton => {
         addButton.setAttribute('disabled', 'true');
      })
   }
}